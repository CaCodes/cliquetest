const emailTemplate = {
  confirmationCode: (code, name) => {
    const html = `
                  <!DOCTYPE HTML
                      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                          xmlns:o="urn:schemas-microsoft-com:office:office">
                      
                      <head>
                          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <meta name="x-apple-disable-message-reformatting">
                          <meta http-equiv="X-UA-Compatible" content="IE=edge">
                          
                          
  
                          <link href="./email/style.css" rel="stylesheet" type="text/css">
                          <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css">
                      </head>
                      <body class="clean-body"
                          style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
                          <table
                          style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%"
                          cellpadding="0" cellspacing="0">
                          <tbody>
                              <tr style="vertical-align: top">
                              <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                      style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                      <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                          <div style="width: 100% !important;">
                                          <div
                                              style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          </div>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                      style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      
                                      <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                          <div style="background-color: #181616;width: 100% !important;">
                                          <div
                                              style="padding: 0px;border-top: 3px solid #c98513;border-left: 3px solid #c98513;border-right: 3px solid #c98513;border-bottom: 3px solid #c98513;">
                      
                                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                                              width="100%" border="0">
                                              <tbody>
                                                  <tr>
                                                  <td class="v-container-padding-padding"
                                                      style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;"
                                                      align="left">
                                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                          <td style="padding-right: 0px;padding-left: 0px;" align="center">
                      
                                                          <img align="center" border="0" src="https://res.cloudinary.com/ecodeemit/image/upload/v1633731364/image-1_xrtp3x.jpg" alt="Image" title="Image"
                                                              style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 23%;max-width: 128.8px;"
                                                              width="128.8" />
                                                          </td>
                                                      </tr>
                                                      </table>
                                                  </td>
                                                  </tr>
                                              </tbody>
                                              </table>
                                          </div>
                                          < </div>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                      <div class="u-row"
                                      style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                                      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                          <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                          <div style="background-color: #181616;width: 100% !important;">
                                              <div
                                              style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                                  cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                  <tr>
                                                      <td class="v-container-padding-padding"
                                                      style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                      align="left">
                      
                                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                          <tr>
                                                          <td style="padding-right: 0px;padding-left: 0px;" align="center">
                      
                                                              <img align="center" border="0" src="https://res.cloudinary.com/ecodeemit/image/upload/v1633731364/image-7_iutekz.png" alt="Image" title="Image"
                                                              style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 25%;max-width: 145px;"
                                                              width="145" />
                      
                                                          </td>
                                                          </tr>
                                                      </table>
                      
                                                      </td>
                                                  </tr>
                                                  </tbody>
                                              </table>
                                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                                  cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                  <tr>
                                                      <td class="v-container-padding-padding"
                                                      style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                      align="left">
                      
                                                      <div
                                                          style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                          <p style="font-size: 14px; line-height: 140%;"><span
                                                              style="color: #fac60e; font-size: 14px; line-height: 19.6px;"><strong>T H A N K
                                                              S&nbsp; &nbsp;F O R&nbsp; &nbsp;S I G N I N G&nbsp; &nbsp;U P !</strong></span>
                                                          </p>
                                                      </div>
                      
                                                      </td>
                                                  </tr>
                                                  </tbody>
                                              </table>
                                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                                  cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                  <tr>
                                                      <td class="v-container-padding-padding"
                                                      style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;"
                                                      align="left">
                      
                                                      <div
                                                          style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                          <p style="font-size: 14px; line-height: 140%;"><span
                                                              style="font-size: 28px; line-height: 39.2px;"><strong><span
                                                                  style="line-height: 39.2px; font-size: 28px;">Verify Your E-mail Address
                                                              </span></strong></span></p>
                                                      </div>
                      
                                                      </td>
                                                  </tr>
                                                  </tbody>
                                              </table>
                      
                                              </div>
                                          </div>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                      <div class="u-row"
                                      style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                      
                                          <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                          <div style="width: 100% !important;">
                                              <div
                                              style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                      
                                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                                  cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                  <tr>
                                                      <td class="v-container-padding-padding"
                                                      style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;"
                                                      align="left">
                      
                                                      <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                          <p style="font-size: 14px; line-height: 160%;"><span
                                                              style="font-size: 22px; line-height: 35.2px;">Hi ${name}! </span></p>
                                                          <p style="font-size: 14px; line-height: 160%;"><span
                                                              style="font-size: 18px; line-height: 28.8px;">You're almost ready to get started.
                                                              Please use the OTP code below to verify your email address and enjoy exclusive
                                                              housing services with us! </span></p>
                                                      </div>
                      
                                                      </td>
                                                  </tr>
                                                  </tbody>
                                              </table>
                      
                                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                                  cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                  <tr>
                                                      <td class="v-container-padding-padding"
                                                      style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                      align="left">
                      
                                                      <div align="center">
                                                          <span
                                                          style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #f4c610; background-color: #181616; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                                          <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span
                                                              style="font-size: 16px; line-height: 19.2px;"><strong><span
                                                                  style="line-height: 19.2px; font-size: 16px;">${code}</span></strong></span></span>
                                                          </span>
                                                      </div>
                      
                                                      </td>
                                                  </tr>
                                                  </tbody>
                                              </table>
                      
                                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                                  cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                  <tr>
                                                      <td class="v-container-padding-padding"
                                                      style="overflow-wrap:break-word;word-break:break-word;padding:25px 53px;font-family:'Cabin',sans-serif;"
                                                      align="left">
                      
                                                      <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                          <p style="line-height: 160%; font-size: 14px;"><span
                                                              style="font-size: 18px; line-height: 28.8px;">Thank You,</span></p>
                                                          <p style="line-height: 160%; font-size: 14px;"><span
                                                              style="font-size: 18px; line-height: 28.8px;">Tent Group Team</span></p>
                                                      </div>
                      
                                                      </td>
                                                  </tr>
                                                  </tbody>
                                              </table>
                                              </div>
                                          </div>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  
                                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                      <div class="u-row"
                                      style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                                      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                          <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                          <div style="background-color: #181616;width: 100% !important;">
                                              <div
                                              style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                      
                                              <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                                  cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                  <tr>
                                                      <td class="v-container-padding-padding"
                                                      style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                      align="left">
                      
                                                      <div
                                                          style="color: #f4c610; line-height: 180%; text-align: center; word-wrap: break-word;">
                                                          <p style="font-size: 14px; line-height: 180%;"><strong><span
                                                              style="font-size: 16px; line-height: 28.8px;">Copyrights &copy; Tent Group All
                                                              Rights Reserved</span></strong></p>
                                                      </div>
                                                      </td>
                                                  </tr>
                                                  </tbody>
                                              </table>
                                              </div>
                                          </div>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                              </td>
                              </tr>
                          </tbody>
                          </table>
                      </body>
              
              </html>
          `;
    return html;
  },

  welcomeEmail: (name) => {
    const html = `
                  <!DOCTYPE HTML
                  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                      xmlns:o="urn:schemas-microsoft-com:office:office">
                  
                  <head>
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <meta name="x-apple-disable-message-reformatting">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
                      <link href="./email/style.css" rel="stylesheet" type="text/css">
                  
                      <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css">
  
                  
                  </head>
                  
                  <body class="clean-body"
                      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
                      <table
                      style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%"
                      cellpadding="0" cellspacing="0">
                      <tbody>
                          <tr style="vertical-align: top">
                          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="width: 100% !important;">
                                      <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              </div>
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                  
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                      <div
                                          style="padding: 0px;border-top: 3px solid #c98513;border-left: 3px solid #c98513;border-right: 3px solid #c98513;border-bottom: 3px solid #c98513;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                                          width="100%" border="0">
                                          <tbody>
                                              <tr>
                                              <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                  <tr>
                                                      <td style="padding-right: 0px;padding-left: 0px;" align="center">
                  
                                                      <img align="center" border="0" src="https://res.cloudinary.com/ecodeemit/image/upload/v1633731364/image-1_xrtp3x.jpg" alt="Image" title="Image"
                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 23%;max-width: 128.8px;"
                                                          width="128.8" />
                                                      </td>
                                                  </tr>
                                                  </table>
                  
                                              </td>
                                              </tr>
                                          </tbody>
                                          </table>
                  
                                      </div>
                                      < </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                  
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                      <td style="padding-right: 0px;padding-left: 0px;" align="center">
                  
                                                          <img align="center" border="0" src="https://res.cloudinary.com/ecodeemit/image/upload/v1633731364/image-7_iutekz.png" alt="Image" title="Image"
                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 25%;max-width: 145px;"
                                                          width="145" />
                  
                                                      </td>
                                                      </tr>
                                                  </table>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span
                                                          style="color: #fac60e; font-size: 14px; line-height: 19.6px;"><strong>T H A N K
                                                          S&nbsp; &nbsp;F O R&nbsp; &nbsp;C O M P L E T I N G&nbsp; &nbsp;Y O U R&nbsp; &nbsp;P R O F I L E !</strong></span>
                                                      </p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span
                                                          style="font-size: 28px; line-height: 39.2px;"><strong><span
                                                              style="line-height: 39.2px; font-size: 28px;">Account Verified
                                                          </span></strong></span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                  
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 160%;"><span
                                                          style="font-size: 22px; line-height: 35.2px;">Hi ${name}! </span></p>
                                                      <p style="font-size: 14px; line-height: 160%;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Thank you for completing your profile. Your Email, Phone Number and Profile has been verified. Enjoy exclusive 
                                                          housing and properties services with us! </span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div align="center">
                                                      <a href="https://www.google.com/" target="_blank"
                                                      style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #f4c610; background-color: #181616; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                                      <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span
                                                          style="font-size: 16px; line-height: 19.2px;"><strong><span
                                                              style="line-height: 19.2px; font-size: 16px;">Continue to Application</span></strong></span></span>
                                                      </a>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:25px 53px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                      <p style="line-height: 160%; font-size: 14px;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Thank You,</span></p>
                                                      <p style="line-height: 160%; font-size: 14px;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Tent Group Team</span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                  
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #f4c610; line-height: 180%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 180%;"><strong><span
                                                          style="font-size: 16px; line-height: 28.8px;">Copyrights &copy; Tent Group All
                                                          Rights Reserved</span></strong></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                          </td>
                          </tr>
                      </tbody>
                      </table>
                  </body>
              </html>
          `;
    return html;
  },

  registeredEmail: (name, email) => {
    const html = `
                  <!DOCTYPE HTML
                  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                      xmlns:o="urn:schemas-microsoft-com:office:office">
                  
                  <head>
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <meta name="x-apple-disable-message-reformatting">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
                      <link href="./email/style.css" rel="stylesheet" type="text/css">
                  
                      <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css">
  
                  
                  </head>
                  
                  <body class="clean-body"
                      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
                      <table
                      style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%"
                      cellpadding="0" cellspacing="0">
                      <tbody>
                          <tr style="vertical-align: top">
                          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="width: 100% !important;">
                                      <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              </div>
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                  
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                      <div
                                          style="padding: 0px;border-top: 3px solid #c98513;border-left: 3px solid #c98513;border-right: 3px solid #c98513;border-bottom: 3px solid #c98513;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                                          width="100%" border="0">
                                          <tbody>
                                              <tr>
                                              <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                  <tr>
                                                      <td style="padding-right: 0px;padding-left: 0px;" align="center">
                  
                                                      <img align="center" border="0" src="https://res.cloudinary.com/ecodeemit/image/upload/v1633731364/image-1_xrtp3x.jpg" alt="Image" title="Image"
                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 23%;max-width: 128.8px;"
                                                          width="128.8" />
                                                      </td>
                                                  </tr>
                                                  </table>
                  
                                              </td>
                                              </tr>
                                          </tbody>
                                          </table>
                  
                                      </div>
                                      < </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                  
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                      <td style="padding-right: 0px;padding-left: 0px;" align="center">
                  
                                                          <img align="center" border="0" src="https://res.cloudinary.com/ecodeemit/image/upload/v1633731364/image-7_iutekz.png" alt="Image" title="Image"
                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 25%;max-width: 145px;"
                                                          width="145" />
                  
                                                      </td>
                                                      </tr>
                                                  </table>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span
                                                          style="color: #fac60e; font-size: 14px; line-height: 19.6px;"><strong>T H A N K
                                                          S&nbsp; &nbsp;F O R&nbsp; &nbsp;R E G I S T R I N G &nbsp; &nbsp;W I T H&nbsp; &nbsp;U S</strong></span>
                                                      </p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span
                                                          style="font-size: 28px; line-height: 39.2px;"><strong><span
                                                              style="line-height: 39.2px; font-size: 28px;">Account Registration
                                                          </span></strong></span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                  
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 160%;"><span
                                                          style="font-size: 22px; line-height: 35.2px;">Hi ${name}! </span></p>
                                                      <p style="font-size: 14px; line-height: 160%;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Your Account has been created. Below is your login details <br > Email: ${email} Password: ${email} <br >Kindly Login and change your password Enjoy exclusive 
                                                          housing and properties services with us! </span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div align="center">
                                                      <a href="https://www.google.com/" target="_blank"
                                                      style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #f4c610; background-color: #181616; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                                      <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span
                                                          style="font-size: 16px; line-height: 19.2px;"><strong><span
                                                              style="line-height: 19.2px; font-size: 16px;">Continue to Application</span></strong></span></span>
                                                      </a>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:25px 53px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                      <p style="line-height: 160%; font-size: 14px;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Thank You,</span></p>
                                                      <p style="line-height: 160%; font-size: 14px;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Tent Group Team</span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                  
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #f4c610; line-height: 180%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 180%;"><strong><span
                                                          style="font-size: 16px; line-height: 28.8px;">Copyrights &copy; Tent Group All
                                                          Rights Reserved</span></strong></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                          </td>
                          </tr>
                      </tbody>
                      </table>
                  </body>
              </html>
          `;
    return html;
  },

  recoverPassword: (code, name) => {
    const html = `
              <!DOCTYPE HTML
                  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                      xmlns:o="urn:schemas-microsoft-com:office:office">
                  
                  <head>
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <meta name="x-apple-disable-message-reformatting">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
                      
                      
  
                      <link href="./email/style.css" rel="stylesheet" type="text/css">
                      <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css">
                  </head>
                  <body class="clean-body"
                      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
                      <table
                      style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%"
                      cellpadding="0" cellspacing="0">
                      <tbody>
                          <tr style="vertical-align: top">
                          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="width: 100% !important;">
                                      <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              </div>
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                  
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                      <div
                                          style="padding: 0px;border-top: 3px solid #c98513;border-left: 3px solid #c98513;border-right: 3px solid #c98513;border-bottom: 3px solid #c98513;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                                          width="100%" border="0">
                                          <tbody>
                                              <tr>
                                              <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                  <tr>
                                                      <td style="padding-right: 0px;padding-left: 0px;" align="center">
                  
                                                      <img align="center" border="0" src="https://res.cloudinary.com/ecodeemit/image/upload/v1633731364/image-1_xrtp3x.jpg" alt="Image" title="Image"
                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 23%;max-width: 128.8px;"
                                                          width="128.8" />
                                                      </td>
                                                  </tr>
                                                  </table>
                                              </td>
                                              </tr>
                                          </tbody>
                                          </table>
                                      </div>
                                      < </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                      <td style="padding-right: 0px;padding-left: 0px;" align="center">
                  
                                                          <img align="center" border="0" src="https://res.cloudinary.com/ecodeemit/image/upload/v1633731364/image-7_iutekz.png" alt="Image" title="Image"
                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 25%;max-width: 145px;"
                                                          width="145" />
                  
                                                      </td>
                                                      </tr>
                                                  </table>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span
                                                          style="color: #fac60e; font-size: 14px; line-height: 19.6px;"><strong>P A S S W O R D
                                                          S&nbsp; &nbsp;R E S E T&nbsp; &nbsp;R E Q U E S T</strong></span>
                                                      </p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span
                                                          style="font-size: 28px; line-height: 39.2px;"><strong><span
                                                              style="line-height: 39.2px; font-size: 28px;">Reset Password OTP
                                                          </span></strong></span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                  
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 160%;"><span
                                                          style="font-size: 22px; line-height: 35.2px;">Hi ${name}! </span></p>
                                                      <p style="font-size: 14px; line-height: 160%;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Please use the OTP code below to reset your password and enjoy exclusive
                                                          housing services with us! </span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div align="center">
                                                      <span
                                                      style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #f4c610; background-color: #181616; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                                      <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span
                                                          style="font-size: 16px; line-height: 19.2px;"><strong><span
                                                              style="line-height: 19.2px; font-size: 16px;">${code}</span></strong></span></span>
                                                      </span>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:25px 53px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                      <p style="line-height: 160%; font-size: 14px;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Thank You,</span></p>
                                                      <p style="line-height: 160%; font-size: 14px;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Tent Group Team</span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #f4c610; line-height: 180%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 180%;"><strong><span
                                                          style="font-size: 16px; line-height: 28.8px;">Copyrights &copy; Tent Group All
                                                          Rights Reserved</span></strong></p>
                                                  </div>
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                          </td>
                          </tr>
                      </tbody>
                      </table>
                  </body>
  
          </html>
          `;
    return html;
  },

  restPassword: (name) => {
    const html = `
                  <!DOCTYPE HTML
                  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                      xmlns:o="urn:schemas-microsoft-com:office:office">
                  
                  <head>
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <meta name="x-apple-disable-message-reformatting">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
                      <link href="./email/style.css" rel="stylesheet" type="text/css">
                  
                      <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css">
  
                  
                  </head>
                  
                  <body class="clean-body"
                      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
                      <table
                      style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%"
                      cellpadding="0" cellspacing="0">
                      <tbody>
                          <tr style="vertical-align: top">
                          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="width: 100% !important;">
                                      <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              </div>
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                  
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                      <div
                                          style="padding: 0px;border-top: 3px solid #c98513;border-left: 3px solid #c98513;border-right: 3px solid #c98513;border-bottom: 3px solid #c98513;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                                          width="100%" border="0">
                                          <tbody>
                                              <tr>
                                              <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                  <tr>
                                                      <td style="padding-right: 0px;padding-left: 0px;" align="center">
                  
                                                      <img align="center" border="0" src="https://res.cloudinary.com/ecodeemit/image/upload/v1633731364/image-1_xrtp3x.jpg" alt="Image" title="Image"
                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 23%;max-width: 128.8px;"
                                                          width="128.8" />
                                                      </td>
                                                  </tr>
                                                  </table>
                  
                                              </td>
                                              </tr>
                                          </tbody>
                                          </table>
                  
                                      </div>
                                      < </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                  
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                      <tr>
                                                      <td style="padding-right: 0px;padding-left: 0px;" align="center">
                  
                                                          <img align="center" border="0" src="https://res.cloudinary.com/ecodeemit/image/upload/v1633731364/image-7_iutekz.png" alt="Image" title="Image"
                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 25%;max-width: 145px;"
                                                          width="145" />
                  
                                                      </td>
                                                      </tr>
                                                  </table>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span
                                                          style="color: #fac60e; font-size: 14px; line-height: 19.6px;"><strong>T H A N K
                                                          S&nbsp; &nbsp;F O R&nbsp; &nbsp;R E S E T I N G&nbsp; &nbsp;Y O U R&nbsp; &nbsp;P A S S W O R D !</strong></span>
                                                      </p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 31px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #e5eaf5; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 140%;"><span
                                                          style="font-size: 28px; line-height: 39.2px;"><strong><span
                                                              style="line-height: 39.2px; font-size: 28px;">Password Reset
                                                          </span></strong></span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                  
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:33px 55px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 160%;"><span
                                                          style="font-size: 22px; line-height: 35.2px;">Hi ${name}! </span></p>
                                                      <p style="font-size: 14px; line-height: 160%;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">This is a confirmation that your password has been reset. Enjoy exclusive 
                                                          housing and properties services with us! </span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div align="center">
                                                      <a href="https://www.google.com/" target="_blank"
                                                      style="box-sizing: border-box;display: inline-block;font-family:'Cabin',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #f4c610; background-color: #181616; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                                      <span style="display:block;padding:14px 44px 13px;line-height:120%;"><span
                                                          style="font-size: 16px; line-height: 19.2px;"><strong><span
                                                              style="line-height: 19.2px; font-size: 16px;">Continue to Application</span></strong></span></span>
                                                      </a>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:25px 53px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                      <p style="line-height: 160%; font-size: 14px;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Thank You,</span></p>
                                                      <p style="line-height: 160%; font-size: 14px;"><span
                                                          style="font-size: 18px; line-height: 28.8px;">Tent Group Team</span></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                  
                              <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                  <div class="u-row"
                                  style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #003399;">
                                  <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                      <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                      <div style="background-color: #181616;width: 100% !important;">
                                          <div
                                          style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                  
                                          <table style="font-family:'Cabin',sans-serif;" role="presentation" cellpadding="0"
                                              cellspacing="0" width="100%" border="0">
                                              <tbody>
                                              <tr>
                                                  <td class="v-container-padding-padding"
                                                  style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Cabin',sans-serif;"
                                                  align="left">
                  
                                                  <div
                                                      style="color: #f4c610; line-height: 180%; text-align: center; word-wrap: break-word;">
                                                      <p style="font-size: 14px; line-height: 180%;"><strong><span
                                                          style="font-size: 16px; line-height: 28.8px;">Copyrights &copy; Tent Group All
                                                          Rights Reserved</span></strong></p>
                                                  </div>
                  
                                                  </td>
                                              </tr>
                                              </tbody>
                                          </table>
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                          </td>
                          </tr>
                      </tbody>
                      </table>
                  </body>
              </html>
          `;
    return html;
  },
};
export default emailTemplate;
