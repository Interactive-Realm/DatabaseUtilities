// Creates a supabase client based on database URL and key, needed to connect to supabase database
export * as Client from './Supabase/SupabaseClient';

// User types (Different variations of user data)
// THIS NEEDS TO BE COMBINED INTO ONE USERTYPE WITH FIELDS NOT BEING REQUIRED TO BE FILLED (EG. Score?)
export * as UserTypes from './usertypes';

// Score related functions (Pertaining to highscores)
export * as Score from './Supabase/highscores';

// End User functions (Insert and Update users)
export * as Users from './Supabase/UserFunctions';

// CMS Related functions
export * as CMS from './Supabase/cms'

