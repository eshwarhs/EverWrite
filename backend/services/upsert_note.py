from lib.mongo import Mongo
from lib.MongoJSONEncoder import MongoJSONEncoder
import json
from bson.objectid import ObjectId
from datetime import datetime, timezone


class UpsertNote:
    def run(request):
        model = {
            'errors': None,
            'data': None,
            'code': None
        }

        data = request.json
        now = datetime.now(timezone.utc).astimezone()

        client = Mongo.client()
        db = client['everwrite']
        notes_collection = db['notes']

        if 'title' not in data or 'content' not in data or 'username' not in data or 'tags' not in data:
            model['errors'] = {'msg': "Invalid JSON"}
            model['code'] = 422
            return model

        notes_collection.insert_one({'title': data['title'], 'content': data['content'],
                                    'username': data['username'], 'tags': data['tags'], 'created_at': now, 'updated_at': now})
        model['data'] = {'msg': 'Note created successfully'}
        model['code'] = 201
        return model
