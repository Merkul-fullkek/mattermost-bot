import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddHasTechnicalSupportRoleInPastToUsers1698765432000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE users
      ADD COLUMN has_technical_support_role_in_past BOOLEAN DEFAULT false;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE users
      DROP COLUMN has_technical_support_role_in_past;
    `);
  }
}
