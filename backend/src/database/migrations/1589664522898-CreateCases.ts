import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCases1589664522898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(
        new Table({
          name: 'cases',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'category_id',
              type: 'uuid',
              isNullable: true,
            },
            {
              name: 'color_id',
              type: 'uuid',
              isNullable: true,
            },
            {
              name: 'genre_id',
              type: 'uuid',
              isNullable: true,
            },
            {
              name: 'size_id',
              type: 'uuid',
              isNullable: true
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ]
        })
      );

      await queryRunner.createForeignKey(
        'cases',
        new TableForeignKey({
          columnNames: ['category_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'categories',
          name: 'CaseCategory',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }),
      );

      await queryRunner.createForeignKey(
        'cases',
        new TableForeignKey({
          columnNames: ['color_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'colors',
          name: 'CaseColor',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
      );

      await queryRunner.createForeignKey(
        'cases',
        new TableForeignKey({
          columnNames: ['genre_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'genres',
          name: 'CaseGenre',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
      );

      await queryRunner.createForeignKey(
        'cases',
        new TableForeignKey({
          columnNames: ['size_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'sizes',
          name: 'CaseSize',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('cases', 'CaseCategory');

      await queryRunner.dropForeignKey('cases', 'CaseColor');
      await queryRunner.dropForeignKey('cases', 'CaseGenre');
      await queryRunner.dropForeignKey('cases', 'CaseSize');

      await queryRunner.dropTable('cases');
    }

}
