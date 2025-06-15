import {
    pgTable,
    pgEnum,
    uuid,
    text,
    doublePrecision,
    timestamp,
    date,
    boolean,
    serial,
    primaryKey,
  } from 'drizzle-orm/pg-core';
  
  //
  // ENUMS
  //
  export const UserTypeEnum = pgEnum('user_type_enum', ['user', 'admin', 'superadmin']);
  export const TermEnum = pgEnum('term_enum', ['search', 'select', 'navigate']);
  
  //
  // TABLE: metro
  //
  export const metros = pgTable('metro', {
    id: uuid('id').primaryKey(),
    lat: doublePrecision('lat'),
    lon: doublePrecision('lon'),

    name: text('name').notNull(),
    station_code: text('station_code').notNull(),
    line: text('line').array().notNull(),
    created_at: timestamp('created_at', { withTimezone: true, mode: 'date' }).defaultNow(),
    updated_at: timestamp('updated_at', { withTimezone: true, mode: 'date' }),
  });
  
  //
  // TABLE: pujo
  //
  export const pujos = pgTable('pujo', {
    id: uuid('id').primaryKey(),
    lat: doublePrecision('lat'),
    lon: doublePrecision('lon'),
    zone: text('zone').notNull(),
    city: text('city').notNull(),
    name: text('name').notNull(),
    address: text('address').notNull(),
    created_at: timestamp('created_at', { withTimezone: true, mode: 'date' }).defaultNow(),
  });
  
  //
  // TABLE: users
  //
  export const users = pgTable('users', {
    id: uuid('id').primaryKey(),
    username: text('username').notNull(),
    first_name: text('first_name'),
    last_name: text('last_name'),
    email: text('email').notNull(),
    password: text('password').notNull(),
    access_location: boolean('access_location'),
    contact: text('contact'),
    gender: text('gender'),
    birth_date: date('birth_date'),
    profile_picture: text('profile_picture'),
    bio: text('bio'),
    is_verified: boolean('is_verified').notNull(),
    user_type: UserTypeEnum('user_type').notNull(),
  });
  
  //
  // TABLE: reviews
  //
  export const reviews = pgTable('review', {
    id: uuid('id').primaryKey(),
    review: text('review').notNull(),
    created_at: date('created_at').notNull(),
    is_edited: boolean('is_edited').notNull(),
    edited_at: date('edited_at'),
    pujo_id: uuid('pujo_id').notNull().references(() => pujos.id),
    user_id: uuid('user_id').notNull().references(() => users.id),
  });
  
  //
  // TABLE: collections (used for favorites, saves, etc.)
  //
  export const collections = pgTable(
    'collection',
    {
      user_id: uuid('user_id').notNull().references(() => users.id),
      pujo_id: uuid('pujo_id').notNull().references(() => pujos.id),
    },
    (table) => ({
      pk: primaryKey(table.user_id, table.pujo_id),
    })
  );
  