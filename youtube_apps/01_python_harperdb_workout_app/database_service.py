import harperdb

url = "https://cloud-1-colbel22.harperdbcloud.com"
username = "colbel"
password = "colbel"

db = harperdb.HarperDB(
    url=url,
    username=username,
    password=password
)

# print(db.describe_all()) printed the dictionary

SCHEMA = "workout_repo"
TABLE="workouts"
TABLE_TODAY="workout_today"

# data = {
#     "video_id":"1234",
#     "title":"test 2",
#     "channel":["test channel"]
# }

# res = db.insert(SCHEMA, TABLE, [data])
# print(res)

def insert_workout(workout_data):
    return db.insert(SCHEMA,TABLE,[workout_data])

def delete_workout(workout_id):
    return db.delete(SCHEMA,TABLE,[workout_id])

# def get_all_workout():
#     return db.sql(f"select * from {SCHEMA}.{TABLE}")

def get_all_workouts():
    return db.sql(f"select video_id, channel, title, duration from {SCHEMA}.{TABLE}")

def get_workout_today():
    return db.sql(f"select * from {SCHEMA}.{TABLE_TODAY} where id = 0")

def update_workout_today(workout_data, insert=False):
    workout_data['id'] = 0
    if insert:
        return db.insert(SCHEMA,TABLE_TODAY,[workout_data])   
    return db.update(SCHEMA, TABLE_TODAY,[workout_data])

# test
# from yt_extractor import get_info

# infos = get_info("https://www.youtube.com/watch?v=AnYl6Nk9GOA")
# print(infos)
# insert_workout(infos)
# workouts = get_all_workouts()
# print(workouts)

