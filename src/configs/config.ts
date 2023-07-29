import common from './common';
import local from './local';
import dev from './dev';
import prod from './prod';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

//NODE_ENV값 저장
const phase = process.env.NODE_ENV;

//phase 값에 따라 적절한 환경 변수값을 저장
let conf = {};

if(phase === 'local') {
    conf = local;
}
else if(phase === 'dev') {
    conf = dev;
}
else if(phase === 'prod') {
    conf = prod;
}

const yamlConfig: Record<string, any> = yaml.load(
    readFileSync(`${process.cwd()}/envs/config.yaml`, 'utf8'),
);

//common과 conf에서 받은 값을 합쳐 반환
export default () => ({
    ...common,
    ...conf,
    ...yamlConfig
});