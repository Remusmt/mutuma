/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Column, Model } from "@prisma/client";

export class ColumnServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ColumnCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ColumnCountArgs>
  ): Promise<number> {
    return this.prisma.column.count(args);
  }

  async findMany<T extends Prisma.ColumnFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ColumnFindManyArgs>
  ): Promise<Column[]> {
    return this.prisma.column.findMany(args);
  }
  async findOne<T extends Prisma.ColumnFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ColumnFindUniqueArgs>
  ): Promise<Column | null> {
    return this.prisma.column.findUnique(args);
  }
  async create<T extends Prisma.ColumnCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ColumnCreateArgs>
  ): Promise<Column> {
    return this.prisma.column.create<T>(args);
  }
  async update<T extends Prisma.ColumnUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ColumnUpdateArgs>
  ): Promise<Column> {
    return this.prisma.column.update<T>(args);
  }
  async delete<T extends Prisma.ColumnDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ColumnDeleteArgs>
  ): Promise<Column> {
    return this.prisma.column.delete(args);
  }

  async getModel(parentId: string): Promise<Model | null> {
    return this.prisma.column
      .findUnique({
        where: { id: parentId },
      })
      .model();
  }
}
