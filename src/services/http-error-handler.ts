import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs';

export class HttpErrorHandler {
    public handleError(error:Response){
        if(error.status===404){
          return throwError(new NotFoundError());
        }
        else if(error.status === 400){
            return throwError(new BadInput(error.json()));
        }
        return throwError(new AppError(error.json()));  
    }
}