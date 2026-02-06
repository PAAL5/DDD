import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CodeBlockDetailsRepository } from './ddd-repositories/CodeBlockDetailsRepository';
import { type CreateCommentDto } from './dto/CreateCommentDto';
import { IdCodeBlock } from './value-objects/IdCodeBlock';
import { CommentMessage } from './value-objects/CommentMessage';
import { Comment } from './entities/Comment';
import { IdUser } from './value-objects/IdUser';
import { type CreateCodeBlockDto } from './dto/CreateCodeBlockDto';
import { CodeBlockContent } from './value-objects/CodeBlockContent';
import { CodePublication } from './domainServices/CodePublication';
import { CodeBlockNotFoundError } from './errors/CodeBlockNotFoundError';

@Controller()
export class AppController {
  private readonly codeBlockRepo: CodeBlockDetailsRepository =
    CodeBlockDetailsRepository.getInstance();

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/code-blocks')
  getCodeBlocks() {
    const codeBlocks = this.codeBlockRepo.getAllCodeBlock();
    return codeBlocks;
  }

  @Post('/code-blocks/:id')
  addCodeBlockComment(
    @Param('id') idCodeBlock: string,
    @Body() dto: CreateCommentDto,
  ) {
    try {
      const codeBlockId = parseInt(idCodeBlock);
      const codeBlockIdObj = new IdCodeBlock(codeBlockId);

      const contentObj = new CommentMessage(dto.content);
      const userIdObj = new IdUser(1); // Normalement dans le token

      this.codeBlockRepo.addCodeBlockComment(
        new Comment(codeBlockIdObj, userIdObj, contentObj),
      );
      return { message: 'Comment added successfully' };
    } catch (error) {
      if (error instanceof CodeBlockNotFoundError) {
        throw new HttpException(
          {
            error: 'Code block not found',
          },
          404,
        );
      }
      throw new HttpException(
        {
          error: 'An error occurred while adding the comment',
        },
        500,
      );
    }
  }

  @Post('/code-blocks')
  addCodeBlock(@Body() dto: CreateCodeBlockDto) {
    try {
      const contentObj = new CodeBlockContent(dto.content);
      const userIdObj = new IdUser(1); // Normalement dans le token
      new CodePublication().publishCode(userIdObj, contentObj);
      return { message: 'Code block added successfully' };
    } catch {
      throw new HttpException(
        {
          error: 'An error occurred while adding the code block',
        },
        500,
      );
    }
  }

  @Get('/code-blocks/:id')
  getCodeBlockDetails(@Param('id') id: string) {
    try {
      const codeBlockId = parseInt(id);
      const codeBlockIdObj = new IdCodeBlock(codeBlockId);
      const details = this.codeBlockRepo.getCodeBlockDetails(codeBlockIdObj);
      if (!details) {
        return { error: 'Code block not found' };
      }
      const returnedDetails = {
        codeBlock: details.getCodeBlock(),
        comments: details.getComments(),
      };
      return returnedDetails;
    } catch (error) {
      if (error instanceof CodeBlockNotFoundError) {
        throw new HttpException(
          {
            error: 'Code block not found',
          },
          404,
        );
      }
      throw new HttpException(
        {
          error: 'An error occurred while fetching the code block details',
        },
        500,
      );
    }
  }
}
