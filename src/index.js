import dva from 'dva';
import './index.css';
import router from './routes'
import './statics/rem';
import models from './models/index';
import './statics/iconfont/iconfont.css';
import './services/index'

const app = dva({});

models(app)


app.router(router)
app.start('#root')
