import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { RequestLogDocument } from './request-log.schema';

@Injectable()
export class RequestLogService {
  constructor(
    @InjectModel('RequestLog')
    private readonly requestLogModel: Model<RequestLogDocument>,
  ) {}

  async createLog(logData: any): Promise<void> {
    const createdLog = new this.requestLogModel(logData);
    await createdLog.save();
  }
}

// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { RequestLog, RequestLogDocument } from './request-log.schema';

// @Injectable()
// export class RequestLogService {
//   constructor(
//     @InjectModel(RequestLog.name) private requestLogModel: Model<RequestLogDocument>,
//   ) {}

//   async create(requestLogData: Partial<RequestLog>): Promise<RequestLog> {
//     console.log('Guardando registro de solicitud:', requestLogData);
//     const createdRequestLog = new this.requestLogModel(requestLogData);
//     return createdRequestLog.save();
//   }

//   async findAll(): Promise<RequestLog[]> {
//     return this.requestLogModel.find().exec();
//   }

//   async findById(id: string): Promise<RequestLog> {
//     const foundRequestLog = await this.requestLogModel.findById(id).exec();
//     if (!foundRequestLog) {
//       throw new Error(`No se encontró ningún registro de RequestLog con el ID ${id}`);
//     }
//     return foundRequestLog;
//   }

//   async update(id: string, requestLogData: Partial<RequestLog>): Promise<RequestLog> {
//     const updatedRequestLog = await this.requestLogModel.findByIdAndUpdate(id, requestLogData, { new: true }).exec();
//     if (!updatedRequestLog) {
//       throw new Error(`No se encontró ningún registro de RequestLog con el ID ${id}`);
//     }
//     return updatedRequestLog;
//   }

//   async delete(id: string): Promise<RequestLog> {
//     const deletedRequestLog = await this.requestLogModel.findByIdAndDelete(id).exec();
//     if (!deletedRequestLog) {
//       throw new Error(`No se encontró ningún registro de RequestLog con el ID ${id}`);
//     }
//     return deletedRequestLog;
//   }
// }
