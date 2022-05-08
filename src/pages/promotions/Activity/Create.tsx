import { AddIcon } from '@chakra-ui/icons';
import { Box, Grid } from '@chakra-ui/react';
import { FC } from 'react';
import { GiftIcon, MemberIcon, TagIcon } from '~/config/icon';
import ActivityHeader from '../components/ActivityHeader';
import CreateActivityItem from './CreateItem';

const CreateActivity: FC = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={10} padding="40px">
      <CreateActivityItem
        Icon={TagIcon}
        title="折价券"
        describe="可建立通用折扣碼或是專屬折 扣碼，讓客戶能於結帳時折抵 商品指定的金額。"
        text="促進客戶花費更多金額、促進客戶購買特定產品等。"
        type="tags"
      />
      <CreateActivityItem
        Icon={AddIcon}
        title="贈品券"
        describe="可建立通用折扣碼或是專屬折扣碼，讓客戶能於購買特定產品時獲得贈品。"
        text="促進客戶花費更多金額、促進客戶購買特定產品等。"
        type="coupon"
      />
      <CreateActivityItem
        Icon={GiftIcon}
        title="禮品卡"
        describe="可建立自訂金額的禮品卡並發放給客戶，讓客戶能夠使用您專屬的禮品卡於您的店舖中消晝。"
        text="吸引新客戶、留存現有客戶，或是通過發送此優惠碼宣傳您的產品，以提高知名度。"
        type="gift"
      />
      <CreateActivityItem
        Icon={MemberIcon}
        title="会员礼"
        describe="專屬您會員的集點活動，並建立自訂義的集點規則與優惠碼的折扣內容。"
        text="回饋客戶對您的品牌或產品的信賴，增加客戶的黏著度。"
        type="member"
      />
    </Grid>
  );
};

export default CreateActivity;
