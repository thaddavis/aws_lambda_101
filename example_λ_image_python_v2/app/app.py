import sys
import json

def handler(event, context):
    json_formatted_str = json.dumps(event, indent=2)
    print(json_formatted_str)
    print('###!###')
    return {
        "status": 200,
        "message": "#!#!#Hello Wooorld#!#!#"
    }