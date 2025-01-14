import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';

import { Group } from './group.entity.js';
import { Role } from './role.entity.js';

@Entity('channels')
export class Channel {
  @PrimaryColumn({ name: 'channel_id', type: 'varchar', unique: true })
  public id!: string;

  @Column({ name: 'name', type: 'varchar', default: '' })
  public name!: string;

  @Column({ name: 'display_name', type: 'varchar', default: '' })
  public displayName!: string;

  @Column({ name: 'type', type: 'varchar', default: '' })
  public type!: string;

  @Column({ name: 'team_id', type: 'varchar', default: '' })
  public teamId!: string;

  @ManyToMany(() => Group, group => group.channels)
  public groups!: Group[] | null;

  @ManyToOne(() => Role, role => role.channels)
  @JoinColumn({ name: 'role_id' })
  public role!: Role | null;
}
