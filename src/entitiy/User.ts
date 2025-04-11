import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  DeleteDateColumn
} from "typeorm";

import { UserRoles } from "./UserRoles";
import { RefreshToken } from "./RefreshToken";
import { create } from "domain";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number | undefined;
  @Column({ type: "text", unique: true, nullable: false })
  username: string | undefined;
  @Column({ type: "text", unique: true, nullable: false })
  email: string | undefined;
  @Column({ name: "password", type: "text", nullable: false })
  password: string | undefined;
  @Column({ name: "tokenVersion", type: "integer", nullable: false })
  tokenVersion: number | undefined = 0;
  @Column({ name: "is_acive", type: "boolean", nullable: false })
  isActive: boolean | undefined = true;
  @CreateDateColumn({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date | undefined;
  @UpdateDateColumn({ name: "updated_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date | undefined;
  @DeleteDateColumn({
    name: "deleted_at",
    type: "timestamp",
    nullable: true,
    default: () => "NULL"
  })
  deletedAt: Date | undefined;
}
