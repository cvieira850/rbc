import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import Category from './Category';
import Color from './Color';
import Genre from './Genre';
import Size from './Size';

@Entity('cases')
class Case {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Category, category => category.case_category, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  category_id: string;

  @ManyToOne(() => Color, color => color.case_color, { eager: true })
  @JoinColumn({ name: 'color_id' })
  color: Color;

  @Column()
  color_id: string;


  @ManyToOne(() => Genre, genre => genre.case_genre, { eager: true })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;

  @Column()
  genre_id: string;

  @ManyToOne(() => Size, size => size.case_size, { eager: true })
  @JoinColumn({ name: 'size_id' })
  size: Size;

  @Column()
  size_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Case;
