import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LendersController } from './lenders/lenders.controller';
import { LendersService } from './lenders/lenders.service';
import { lenders } from 'src/User/typeorm/lenders';

@Module({
  imports: [TypeOrmModule.forFeature([lenders])],
  providers: [LendersService],
  controllers: [LendersController],
 
  exports: [LendersService]

})
export class LendersModule {}
