'use strict';

module.exports = {
  app: {
    title: 'DialTron',
    description: 'DialTron:is a A rated BBB company.Plans start at $49.The DialTron.com award winning sales engine software is a hosted lead generation, management and dialer service designed by veteran sales professionals for the sales industry. Dial 250 calls/ hour. 300% increase in productivity',
    keywords: 'telemarketing dialer, predictive dialer, power dialing, automatic phone dialer, hosted  predictive dialer, dialer software, automated dialing, progressive dialer, hosted auto dialer,  mortgage dialer, dialer program, dialing solutions, sales dialers, real estate dialers, easy campaign',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  templateEngine: 'swig',
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: process.env.SESSION_SECRET || 'MEAN',
  // sessionKey is set to the generic sessionId key used by PHP applications
  // for obsecurity reasons
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  logo: 'modules/core/client/img/brand/logo.png',
  favicon: 'modules/newec/client/assets/img/headers/favicon.ico',
  uploads: {
    profileUpload: {
      dest: './modules/users/client/img/profile/uploads/', // Profile upload destination path
      limits: {
        fileSize: 1*1024*1024 // Max file size in bytes (1 MB)
      }
    }
  }
};
