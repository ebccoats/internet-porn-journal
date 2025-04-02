# Museum of the First Internet Porn

## WIP database schema from [dbdiagram.io](http://dbdiagram.io)

```
Table donations {
  user_id integer
  nametag varchar
  donated_string varchar
  created_at timestamp
}

Table users {
  id integer [primary key]
  unique_user_string string
}

Table curator_dialog {
  id integer [primary key]
  dialog_line varchar
  context_description varchar
  button_text varchar
  triggers_event varchar
}

Table constraints {
  id integer [primary key]
  name_id varchar
  description varchar
}

// Define the joins later
Table dialog_constraint_joins {
  constraints_id integer
  dialog_id integer
}

Table degradations {
  id integer [primary key]
  start_index integer
  end_index integer
  user_id integer [not null]
  post_degradation_ascii_string varchar
  created_at timestamp
}

Table pixel_dust {
  id integer [primary key]
  x integer
  y integer
}

Table ascii_single_string {
  changed_state varchar
}

Ref user_posts: degradations.user_id > users.id // many-to-one

Ref: users.id < donations.user_id

```