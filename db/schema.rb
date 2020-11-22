# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2020_11_21_052646) do
=======
ActiveRecord::Schema.define(version: 2020_11_21_220109) do
>>>>>>> master

  # These are extensions that must be enabled in order to support this database
  enable_extension "btree_gin"
  enable_extension "btree_gist"
  enable_extension "citext"
  enable_extension "cube"
  enable_extension "dblink"
  enable_extension "dict_int"
  enable_extension "dict_xsyn"
  enable_extension "earthdistance"
  enable_extension "fuzzystrmatch"
  enable_extension "hstore"
  enable_extension "intarray"
  enable_extension "ltree"
  enable_extension "pg_stat_statements"
  enable_extension "pg_trgm"
  enable_extension "pgcrypto"
  enable_extension "pgrowlocks"
  enable_extension "pgstattuple"
  enable_extension "plpgsql"
  enable_extension "tablefunc"
  enable_extension "unaccent"
  enable_extension "uuid-ossp"
  enable_extension "xml2"

  create_table "artists_musics", id: false, force: :cascade do |t|
    t.bigint "artist_id", null: false
    t.bigint "music_id", null: false
    t.index ["music_id", "artist_id"], name: "index_artists_musics_on_music_id_and_artist_id", unique: true
  end

  create_table "exercises", force: :cascade do |t|
    t.string "exercise_name"
    t.text "description"
    t.string "video_url"
    t.string "thumbnail_image_url"
    t.boolean "upper_body"
    t.boolean "lower_body"
    t.string "force"
  end

  create_table "exercises_muscles", id: false, force: :cascade do |t|
    t.bigint "exercise_id", null: false
    t.bigint "muscle_id", null: false
  end

  create_table "muscles", force: :cascade do |t|
    t.string "muscle_name"
    t.string "muscle_group"
  end

  create_table "sets", force: :cascade do |t|
    t.integer "user_exercise_for_session_id"
    t.integer "reps"
    t.integer "rpe"
    t.integer "weight"
  end

  create_table "user_exercises_for_sessions", force: :cascade do |t|
    t.integer "workout_session_id"
    t.integer "exercise_id"
    t.text "workout_notes"
  end

  create_table "users", force: :cascade do |t|
    t.string "customer_name"
    t.string "email"
    t.string "password"
    t.integer "height_cm"
    t.integer "weight"
  end

  create_table "workout_sessions", force: :cascade do |t|
    t.integer "user_id"
    t.date "workout_date"
  end

end
