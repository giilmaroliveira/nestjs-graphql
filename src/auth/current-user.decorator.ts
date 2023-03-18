import { createParamDecorator } from '@nestjs/common/decorators';
import { ExecutionContext } from '@nestjs/common/interfaces';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    if (context.getType() === 'http') {
      return context.switchToHttp().getRequest().user;
    }

    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);
