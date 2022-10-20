
import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"


@Entity({ name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

   @IsNotEmpty()
    @Column({length:100, nullable:false})
    descricao: string;

    @OneToMany(() => Produto, (produto) => produto.categoria,)
        produto: Produto [];    
}
