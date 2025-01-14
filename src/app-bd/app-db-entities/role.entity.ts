import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Channel } from './channel.entity.js';
import { Group } from './group.entity.js';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn({ name: 'role_id', type: 'integer' })
  public readonly id!: number;

  @Column({ name: 'name', type: 'varchar', unique: true })
  public name!: string;

  @OneToMany(() => Channel, channel => channel.role)
  public channels!: Channel[];

  @OneToMany(() => Group, group => group.role)
  public groups!: Group[];
}
