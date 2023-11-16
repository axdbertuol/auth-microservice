import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNumber } from 'class-validator';
import { EntityHelper } from '@/utils/entity-helper';
import { Role as IRole } from 'kommshop-types';

@Entity()
export class Role extends EntityHelper implements IRole {
  @ApiProperty({ example: 1 })
  @PrimaryColumn()
  @IsNumber()
  id: number;

  @Allow()
  @ApiProperty({ example: 'Admin' })
  @Column()
  name?: string;
}
