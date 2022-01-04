from ariadne import ObjectType, convert_kwargs_to_snake_case

from store import users, messages, queues

mutation = ObjectType("Mutation")

@mutation.field("createUser")
@convert_kwargs_to_snake_case
async def resolve_create_user(obj, info, username):
    try:
        existing_user = users.get(username)
        if existing_user:
            return {
                "success": True,
                "user": existing_user,
            }
        else:
            user = {
                "user_id": len(users) + 1,
                "username": username,
            }
            users[username] = user
            return {
                "success": True,
                "user": user,
            }
    except Exception as error:
        return {
            "success": False,
            "errors": [str(error)],
        }

@mutation.field("createMessage")
@convert_kwargs_to_snake_case
async def resolve_create_message(obj, info, content, sender_id, recipient_id):
    try:
        message = {
            "content": content,
            "message_id": len(messages) + 1,
            "sender_id": sender_id,
            "recipient_id": recipient_id,
        }
        messages.append(message)
        for queue in queues:
            await queue.put(message)
        return {
            "success": True,
            "message": message
        }
    except Exception as error:
        return {
            "success": False,
            "errors": [str(error)]
        }
