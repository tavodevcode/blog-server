import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'varchar',
    length: 255
  })
  name: string

  @Column({
    type: 'varchar',
    length: 255
  })
  email: string

  @Column({
    type: 'varchar',
    length: 100
  })
  password: string

  @Column({
    type: 'varchar',
    length: 10,
    nullable: true
  })
  phone?: string
}
