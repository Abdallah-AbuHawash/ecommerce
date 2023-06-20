<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hometools' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!;bwY)`F||=B/QU-QsRrw2]v)_V,{,n68mSIYaV=S#Z]1y^qEA(g^s[kgT[p+cgF' );
define( 'SECURE_AUTH_KEY',  ']Q}d`mk2Y :3bb8-^D8Rck{Cb5s.>tij}wX=BW4}:zV$I*.!b}~Ylf{HS%+Z5pLA' );
define( 'LOGGED_IN_KEY',    'yM[Af/&qK1UJUe864K,z_4B|E`7Y371oPc>@fC_yBzp!m,BE:xYU}kw*xP8m/Dn/' );
define( 'NONCE_KEY',        'V^u^haT)$+@<9w;t8Ncte 7}S;>%zE`Gfc[KGB@H{~1<~<H*T]hd0=_jX>k_(I1a' );
define( 'AUTH_SALT',        '?QeU$Z9dMqj}/1>snNoF!F,~dNEEjSrnUcC>tJ5+%c17;Z+3| ]rI;b-?;0Utf;~' );
define( 'SECURE_AUTH_SALT', '*wq)4dP}HFx{cInk4$hk?Zn6}];oH/]8Em^8h 1ZKI-8#=Cn:M_!a!d(_`@-<^e4' );
define( 'LOGGED_IN_SALT',   '7tc$L3)G4D&(uCDzOqT.[Dv[J:7E@CBAiF=ua(:1wt~}+ EI=wNz#>?)}Xv>-;;0' );
define( 'NONCE_SALT',       'OP.|S`!XT$S&qB+|%|;)HrhplN##:*6^8^OqEK4r>_DNd2S6P70j8*$L?~~7,CYR' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
