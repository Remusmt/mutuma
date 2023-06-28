/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ColumnWhereInput } from "./ColumnWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ColumnOrderByInput } from "./ColumnOrderByInput";

@ArgsType()
class ColumnFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ColumnWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ColumnWhereInput, { nullable: true })
  @Type(() => ColumnWhereInput)
  where?: ColumnWhereInput;

  @ApiProperty({
    required: false,
    type: [ColumnOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ColumnOrderByInput], { nullable: true })
  @Type(() => ColumnOrderByInput)
  orderBy?: Array<ColumnOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ColumnFindManyArgs as ColumnFindManyArgs };