import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Channel } from './channel.entity.js';
import { Role } from './role.entity.js';

@Entity('groups')
export class Group {
  @PrimaryGeneratedColumn({ name: 'group_id', type: 'integer' })
  public readonly id!: number;

  @Column({ name: 'name', type: 'varchar', default: '' })
  public name!: string;

  @ManyToOne(() => Role, role => role.groups)
  public role!: Role | null;

  @ManyToMany(() => Channel, channel => channel.groups)
  @JoinTable({
    name: 'group_channels',
    joinColumn: {
      name: 'group_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'channel_id',
      referencedColumnName: 'id'
    }
  })
  public channels!: Channel[];
}
