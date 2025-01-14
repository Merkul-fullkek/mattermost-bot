import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { Role } from './role.entity.js';

@Entity('users')
export class User {
    @PrimaryColumn({ name: 'user_id', type: 'varchar', nullable: false, unique: true })
  public id!: string;

    @Column({ name: 'username', type: 'varchar', default: '' })
    public username!: string;

    @ManyToOne(() => Role, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'role_id' })
    public role?: Role | null;

    @Column({ name: 'has_technical_support_role_in_past', type: 'boolean', default: false })
    public hasTechnicalSupportRoleInPast!: boolean;
}
