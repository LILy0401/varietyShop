import dva from 'dva';
import './index.css';
import router from './routes'
import models from './models/index';

const app = dva({});

models(app)

app.router(router)
app.start('#root')
