import { Module } from '@nestjs/common';
import { LendersController } from './lenders/lenders.controller';
import { LendersService } from './lenders/lenders.service';

@Module({
  controllers: [LendersController],
  providers: [LendersService]
})
export class LendersModule {}
