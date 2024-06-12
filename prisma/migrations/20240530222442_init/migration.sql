-- CreateTable
CREATE TABLE "sys_department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "order_no" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "parent_department_id" INTEGER,

    CONSTRAINT "sys_department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sys_dictionary" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "remark" TEXT,
    "status" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "sys_dictionary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sys_dictionary_entry" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "order_no" INTEGER,
    "status" INTEGER NOT NULL,
    "remark" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "dictionary_id" INTEGER NOT NULL,

    CONSTRAINT "sys_dictionary_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sys_loginlog" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ip" TEXT,
    "address" TEXT,
    "login_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "system" TEXT,
    "browser" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "sys_loginlog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sys_menu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "description" TEXT,
    "remark" TEXT,
    "icon" TEXT,
    "path" TEXT,
    "path_file" TEXT,
    "status" INTEGER,
    "isShow" INTEGER,
    "isCache" INTEGER,
    "permission" TEXT,
    "isLink" INTEGER,
    "order_no" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "parent_menu_id" INTEGER,

    CONSTRAINT "sys_menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sys_menu_role" (
    "id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "menu_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "sys_menu_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sys_role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "description" TEXT,
    "remark" TEXT,
    "status" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "sys_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sys_user" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "password" TEXT NOT NULL,
    "lang" TEXT NOT NULL DEFAULT 'en-US',
    "theme" TEXT NOT NULL DEFAULT 'light',
    "phone" TEXT,
    "remark" TEXT,
    "status" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "department_id" INTEGER,

    CONSTRAINT "sys_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sys_user_role" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "sys_user_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tools_storage" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "ext_name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "tools_storage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_link" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "profile_link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_link_category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "profile_link_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT,
    "source" TEXT,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "news_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "news_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT,
    "source" TEXT,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "category_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "blog_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "blog_tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mail" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "title" TEXT,
    "host" TEXT,
    "port" INTEGER,
    "user" TEXT,
    "pass" TEXT,
    "from" TEXT,
    "to" TEXT,
    "subject" TEXT,
    "content" TEXT,
    "html" TEXT,
    "text" TEXT,

    CONSTRAINT "mail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_sign_log" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sign_type" INTEGER NOT NULL,
    "sign_time" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "user_sign_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_sign" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "resign_nums" INTEGER NOT NULL,
    "signed_nums" INTEGER NOT NULL,
    "continuity_signed_nums" INTEGER NOT NULL,

    CONSTRAINT "user_sign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feed_back" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "feed_back_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "change_log" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "publish_name" TEXT NOT NULL,
    "publish_version" TEXT NOT NULL,
    "publish_time" TIMESTAMP(3) NOT NULL,
    "type" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "change_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "news_category_name_key" ON "news_category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "blog_category_name_key" ON "blog_category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "blog_tag_name_key" ON "blog_tag"("name");

-- AddForeignKey
ALTER TABLE "sys_department" ADD CONSTRAINT "sys_department_parent_department_id_fkey" FOREIGN KEY ("parent_department_id") REFERENCES "sys_department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sys_dictionary_entry" ADD CONSTRAINT "sys_dictionary_entry_dictionary_id_fkey" FOREIGN KEY ("dictionary_id") REFERENCES "sys_dictionary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sys_menu" ADD CONSTRAINT "sys_menu_parent_menu_id_fkey" FOREIGN KEY ("parent_menu_id") REFERENCES "sys_menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sys_menu_role" ADD CONSTRAINT "sys_menu_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "sys_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sys_menu_role" ADD CONSTRAINT "sys_menu_role_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "sys_menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sys_user" ADD CONSTRAINT "sys_user_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "sys_department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sys_user_role" ADD CONSTRAINT "sys_user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "sys_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sys_user_role" ADD CONSTRAINT "sys_user_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "sys_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_link" ADD CONSTRAINT "profile_link_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "profile_link_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_news_id_fkey" FOREIGN KEY ("news_id") REFERENCES "news_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "blog_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "blog_tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
