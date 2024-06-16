import type { Observable } from 'rxjs';
import type SMTPConnection from 'nodemailer/lib/smtp-connection';
import { SortOrder } from '@/types';
import { from } from 'rxjs';
import nodemailer from 'nodemailer';
import prisma from '@/libs/prisma';

type EmailTemplateOptions = {
  page: number;
  pageSize: number;
  name?: string;
};

export interface ToolsMail {
  sendMail(options: SendMailOptions): Promise<any>;
  count(): Observable<any>;
}

export interface ToolsMail {
  // sendMail
  sendMail$(options: SendMailOptions): Observable<any>;
  // get
  getEmailTemplateById$(id: number): Observable<any>;
  getEmailTemplatePage$(options: EmailTemplateOptions): Observable<any[]>;
  // create
  createEmailTemplate$(data: any): Observable<any[]>;
  // update
  updateEmailTemplate$(data: any): Observable<any[]>;
  // delete
  deleteEmailTemplateById$(id: number): Observable<any[]>;
  deleteEmailTemplateByIds$(ids: number[]): Observable<any>;
  // count
  count$(): Observable<any>;
}

type SendMailOptions = {
  host: string;
  port: number;
  auth: {
    user: string;
    pass: string;
  };

  to: string; // 接收者的邮箱地址
  subject: string; // 邮件主题
  // text?: string; //邮件的text
  // html?: string; //也可以用html发送
  content: string;
};

export function sendMail(options: SendMailOptions) {
  let transporter = nodemailer.createTransport({
    host: options.host, // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
    port: options.port, // SMTP 端口
    secureConnection: false, // SSL安全链接
    secure: true,
    requireTLS: true,
    auth: {
      //发送者的账户密码
      user: options.auth.user, //账户
      pass: options.auth.pass, //smtp授权码，到邮箱设置下获取
    },
  } as SMTPConnection.Options);

  let mailOptions = {
    from: `<${options.auth.user}>`, // 发送者昵称和地址
    to: options.to, // 接收者的邮箱地址
    subject: options.subject, // 邮件主题
    html: options.content, //也可以用html发送
  };

  //发送邮件
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
        return console.error(error);
      }

      resolve(info);
    });
  });
}

export function sendMail$(options: SendMailOptions) {
  let transporter = nodemailer.createTransport({
    host: options.host, // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
    port: options.port, // SMTP 端口
    secureConnection: false, // SSL安全链接
    secure: true,
    requireTLS: true,
    auth: {
      //发送者的账户密码
      user: options.auth.user, //账户
      pass: options.auth.pass, //smtp授权码，到邮箱设置下获取
    },
  } as SMTPConnection.Options);

  let mailOptions = {
    from: `<${options.auth.user}>`, // 发送者昵称和地址
    to: options.to, // 接收者的邮箱地址
    subject: options.subject, // 邮件主题
    html: options.content, //也可以用html发送
  };

  //发送邮件
  const sendMailPromise = new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
        return console.error(error);
      }

      resolve(info);
    });
  });

  return from(sendMailPromise);
}

/**
 * 根据 mail 模板的总量
 */
export function count$() {
  return from(prisma.mail.count());
}

/**
 * 根据 id 获取 mail 模板内容
 * @param id {Number}
 * @returns
 */
export function getEmailTemplateById$(id: number) {
  return from(prisma.mail.findUnique({ where: { id } }));
}

/**
 * 分页获取邮件模板
 * @param id {Number}
 * @returns
 */
export function getEmailTemplatePage$(options: EmailTemplateOptions) {
  return from(
    prisma.mail.findMany({
      skip: (options.page - 1) * options.pageSize,
      take: options.pageSize,
      orderBy: {
        id: SortOrder.DESCENDING,
      },
    }),
  );
}

/**
 * 创建模板
 * @param data
 * @returns
 */
export function createEmailTemplate$(data: any) {
  return from(
    prisma.mail.create({
      data,
    }),
  );
}

/**
 * 更新模板数据
 * @param data
 * @returns
 */
export function updateEmailTemplate$(data: any) {
  return from(
    prisma.mail.update({
      where: {
        id: data.id,
      },
      data,
    }),
  );
}

/**
 * 根据 id 删除邮件模板
 * @param id
 * @returns
 */
export function deleteEmailTemplateById$(id: number) {
  return from(
    prisma.mail.delete({
      where: {
        id,
      },
    }),
  );
}

/**
 * 根据 id 删除邮件模板
 * @param id
 * @returns
 */
export function deleteEmailTemplateByIds$(ids: number[]) {
  return from(
    prisma.mail.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    }),
  );
}
