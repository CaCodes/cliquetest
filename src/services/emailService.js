import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import LoggerInstance from '../loaders/logger';
import config from '../config';


const transporter = nodemailer.createTransport(smtpTransport({
  // service: config.emailService.service,
  host: config.emailService.host,
  port: config.emailService.email_port,
  secure: true, // true for 465, false for other ports
  auth: {
    user: config.emailService.auth_username,
    pass: config.emailService.auth_password,
  },
}));


const emailService = {
  emailServiceAuto: async (to, subject, text) => {
    const info = await transporter.sendMail({
      from: '"Tent Group" <noreply@ecodeem.com>',
      to,
      subject,
      html: text,
    });

    LoggerInstance.info('Message sent: %s', info.messageId);
    LoggerInstance.info('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  },

  emailServiceManual: async (payload) => {
    const { to, cc, bcc, subject, message, attachments } = payload;
    try {
      const info = await transporter.sendMail({
        from: '"Tent Support" <noreply@ecodeem.com>',
        to,
        cc,
        bcc,
        subject,
        html: message,
        attachments,
      });

      LoggerInstance.info('Message sent: %s', info.messageId);
      LoggerInstance.info('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      return info;
    } catch (error) {
      throw error;
    }
  },
};


export default emailService;
