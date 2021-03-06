import { pick } from 'lodash';
import { Dimensions } from 'react-native';

const deviceUtils = {};

deviceUtils.iPhoneXWidth = 375;
deviceUtils.isSmallPhone = Dimensions.get('window').width < deviceUtils.iPhoneXWidth;
deviceUtils.isLargePhone = Dimensions.get('window').width >= deviceUtils.iPhoneXWidth;

deviceUtils.dimensions = pick(Dimensions.get('window'), ['height', 'width']);

export default deviceUtils;
