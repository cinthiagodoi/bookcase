import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRefactoring1593790511737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "firstName" to "name"`)
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "lastName" to "email"`)
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "age" to "password"`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "name" to "firstName"`)
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "email" to "lastName"`)
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "password" to "age"`)
    }

}
