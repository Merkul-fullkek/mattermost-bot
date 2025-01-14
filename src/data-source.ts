import { DataSource } from 'typeorm';

import { Channel } from './app-bd/app-db-entities/channel.entity.js';
import { Group } from './app-bd/app-db-entities/group.entity.js';
import { Role } from './app-bd/app-db-entities/role.entity.js';
import { User } from './app-bd/app-db-entities/user.entity.js';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'app-db',
  port: 5432,
  username: 'appuser',
  password: 'appuser_password',
  database: 'appdb',
  synchronize: true,
  logging: true,
  entities: [ Channel, Group, User, Role ],
  migrations: ['/src/app-bd/app-db-entities/migration/*.{ts,js}']
});
