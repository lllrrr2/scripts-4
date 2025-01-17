# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
56 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
31 * * * * sh +x /scripts/docker/auto_help.sh collect |ts >> /scripts/logs/auto_help_collect.log 2>&1

#关注店铺
7 9,17 * * * python3 /scripts/jd_follow.py  |ts >> /scripts/logs/jd_follow.log 2>&1
##############短期活动##############
#女装盲盒 活动时间：2021-04-1到2021-04-31
35 0,8,22 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_nzmh.js |ts >> /scripts/logs/jd_nzmh.log 2>&1
#京东极速版红包(活动时间：2021-5-5至2021-5-5)
13 0,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_speed_redpocke.js |ts >> /scripts/logs/jd_speed_redpocke.log 2>&1
#超级直播间红包雨(活动时间不定期，出现异常提示请忽略。红包雨期间会正常)
0,1 18 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_live_redrain.js |ts >> /scripts/logs/jd_live_redrain.log 2>&1
#5G超级盲盒 活动时间：2021-03-19到2021-04-30
6 0,1-23/4 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_mohe.js |ts >> /scripts/logs/jd_mohe.log 2>&1

#每日抽奖(活动时间：2021-05-01至2021-05-31)
9 0,22,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_daily_lottery.js |ts >> /scripts/logs/jd_daily_lottery.log 2>&1

38 6,12 * 6 * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_carnivalcity.js |ts >> /scripts/logs/jd_carnivalcity.log 2>&1
9 2,9,18 * 6 * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_carnivalcity.js |ts >> /scripts/logs/jd_carnivalcity.log 2>&1
1 0-23/8,23 5 6 * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_city.js |ts >> /scripts/logs/jd_city.log 2>&1
23 0-23/1 * 6 * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_zoo.js |ts >> /scripts/logs/jd_zoo.log 2>&1
12,40 * * 6 * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_zooCollect.js |ts >> /scripts/logs/jd_zooCollect.log 2>&1

#3 0-23/1 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_zoo.js |ts >> /scripts/logs/jd_zoo.log 2>&1
#金榜创造营
18 0-23/8 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_gold_creator.js |ts >> /scripts/logs/jd_gold_creator.log 2>&1
#星推官
0 0-23/6 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_xtg.js |ts >> /scripts/logs/jd_xtg.log 2>&1
4 0-23/9 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_xtg_help.js |ts >> /scripts/logs/jd_xtg_help.log 2>&1

#金榜投票............... ...............2021-05-21...2021-12-31
40 0,21 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_gold_creator.js |ts >> /scripts/logs/jd_gold_creator.log 2>&1
#5G魔盒............(...............2021-06-2...2021-07-31)
0 0-23/3 * 6,7 * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_mohe.js |ts >> /scripts/logs/jd_mohe.log 2>&1

#5 0-23/1 * 6 * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_big_winner.js |ts >> /scripts/logs/jd_big_winner.log 2>&1
#..................(5.31.........)
0 1,7,10 1-10 6 * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_star_shop.js |ts >> /scripts/logs/jd_star_shop.log 2>&1
3 0,6,20 1-18 6 * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_mcxhd.js |ts >> /scripts/logs/jd_mcxhd.log 2>&1
3 0,1,8 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_jxlhb.js |ts >> /scripts/logs/jd_jxlhb.log 2>&1
##############长期活动##############
# 签到
4 0,17 * * * cd /scripts &&  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  jd_bean_sign.js |ts >> /scripts/logs/jd_bean_sign.log 2>&1
# 东东超市兑换奖品
0,30 0 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_blueCoin.js |ts >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
2 0,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_club_lottery.js |ts >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
15 8,12,20 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_fruit.js |ts >> /scripts/logs/jd_fruit.log 2>&1
# 宠汪汪
35 */2,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_joy.js |ts >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪积分兑换京豆
0 0 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_joy_reward.js |ts >> /scripts/logs/jd_joy_reward.log 2>&1
59 7,15 * * * sleep 58;  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  conc /scripts/jd_joy_reward.js |ts >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪喂食
15 */1 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_joy_feedPets.js |ts >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪邀请助力
10 13-20/1 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_joy_run.js |ts >> /scripts/logs/jd_joy_run.log 2>&1
# 摇钱树
13 */2 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_moneyTree.js |ts >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
2 8,13,19 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_pet.js |ts >> /scripts/logs/jd_pet.log 2>&1
# 京东种豆得豆
16 8-23/1 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_plantBean.js |ts >> /scripts/logs/jd_plantBean.log 2>&1
# 京东全民开红包
5 0-23/4 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_redPacket.js |ts >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
0 0,12 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_shop.js |ts >> /scripts/logs/jd_shop.log 2>&1
# 东东超市
21 0,1-23/2 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_superMarket.js |ts >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
6 8 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_unsubscribe.js |ts >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
30 7 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_bean_change.js |ts >> /scripts/logs/jd_bean_change.log 2>&1
# 京东抽奖机
0 0,12,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_lotteryMachine.js |ts >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 京东排行榜
11 8,9,15 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_rankingList.js |ts >> /scripts/logs/jd_rankingList.log 2>&1
# 天天提鹅
36 * * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_daily_egg.js |ts >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
24 0-23/6 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_pigPet.js |ts >> /scripts/logs/jd_pigPet.log 2>&1
# 点点券
20 0,20 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_necklace.js |ts >> /scripts/logs/jd_necklace.log 2>&1
# 京喜工厂
33 7-23/1 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_dreamFactory.js |ts >> /scripts/logs/jd_dreamFactory.log 2>&1
50 23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_dreamFactory.js |ts >> /scripts/logs/jd_dreamFactory.log 2>&1
# 东东小窝
26 6,18,22 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_small_home.js |ts >> /scripts/logs/jd_small_home.log 2>&1
# 东东工厂
41 * * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_jdfactory.js |ts >> /scripts/logs/jd_jdfactory.log 2>&1
# 赚京豆(微信小程序)
36,56 0,19,22 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_syj.js |ts >> /scripts/logs/jd_syj.log 2>&1
# 京东快递签到
22 1,18 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_kd.js |ts >> /scripts/logs/jd_kd.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
0 0 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_car.js |ts >> /scripts/logs/jd_car.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
1 0,6,20 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_bean_home.js |ts >> /scripts/logs/jd_bean_home.log 2>&1
# 微信小程序京东赚赚
16 0-5/1,11 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_jdzz.js |ts >> /scripts/logs/jd_jdzz.log 2>&1
# crazyJoy自动每日任务
30 7,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_crazy_joy.js |ts >> /scripts/logs/jd_crazy_joy.log 2>&1
# 京东汽车旅程赛点兑换金豆
#0 0 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_car_exchange.js |ts >> /scripts/logs/jd_car_exchange.log 2>&1
# 导到所有互助码
11 7,19 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_get_share_code.js |ts >> /scripts/logs/jd_get_share_code.log 2>&1
# 口袋书店
23 7,12,19 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_bookshop.js |ts >> /scripts/logs/jd_bookshop.log 2>&1
# 京喜农场
9 0,6,9,12,18,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_jxnc.js |ts >> /scripts/logs/jd_jxnc.log 2>&1
# 签到领现金
5 */6,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_cash.js |ts >> /scripts/logs/jd_cash.log 2>&1
# 京喜app签到
14 7,19 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jx_sign.js |ts >> /scripts/logs/jx_sign.log 2>&1
# 闪购盲盒
13 10,20 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_sgmh.js |ts >> /scripts/logs/jd_sgmh.log 2>&1
# 京东秒秒币
3 6,18 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_ms.js |ts >> /scripts/logs/jd_ms.log 2>&1
#美丽研究院
#21 7,12,19 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_beauty.js |ts >> /scripts/logs/jd_beauty.log 2>&1
#京东保价
31 10 * * 5 sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_price.js |ts >> /scripts/logs/jd_price.log 2>&1
#京东极速版签到+赚现金任务
7 0,5,17 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_speed_sign.js |ts >> /scripts/logs/jd_speed_sign.log 2>&1
#监控crazyJoy分红
2 12 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_crazy_joy_bonus.js |ts >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
#京喜财富岛
54 */2 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_cfd.js |ts >> /scripts/logs/jd_cfd.log 2>&1
# 删除优惠券(默认注释，如需要自己开启，如有误删，已删除的券可以在回收站中还原，慎用)
#20 9 * * 6 sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_delCoupon.js |ts >> /scripts/logs/jd_delCoupon.log 2>&1
#家庭号
4 6,7,20 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_family.js |ts >> /scripts/logs/jd_family.log 2>&1
#京东直播（又回来了）
30-50/5 12,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_live.js |ts >> /scripts/logs/jd_live.log 2>&1      
#京小兑
6 7,15,21 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_jxd.js |ts >> /scripts/logs/jd_jxd.log 2>&1
#京东健康社区
13 8,22 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_health.js |ts >> /scripts/logs/jd_health.log 2>&1
#京东健康社区收集健康能量
24,51 * * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_health_collect.js |ts >> /scripts/logs/jd_health_collect.log 2>&1
# 幸运大转盘
15 8,22 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_market_lottery.js |ts >> /scripts/logs/jd_market_lottery.log 2>&1
# 津贴                                                                                                                
1 0,8,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_jin_tie.js |ts >> /scripts/logs/jd_jin_tie.log 2>&1 
#龙猪猪红包雨
4 0 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_redrainlzz.js |ts >> /scripts/logs/sj_jd_redrainlzz.log 2>&1
4 0 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_redrainme.js |ts >> /scripts/logs/sj_jd_redrainlme.log 2>&1
# .....................                                                                                                     
13 0,9,18,22 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_jump.js |ts >> /scripts/logs/jd_jump.log 2>&1 
#京喜牧场
45 */3 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_jxmc.js |ts >> /scripts/logs/jd_jxmc.log 2>&1 
#3 0,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_tcl.js |ts >> /scripts/logs/jd_tcl.log 2>&1
#3 0,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_tcl.js |ts >> /scripts/logs/jd_tcl.log 2>&1
#3 0,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_tcl.js |ts >> /scripts/logs/jd_tcl.log 2>&1
#3 0,23 * * * sleep $((RANDOM % $RANDOM_DELAY_MAX));  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/jd_tcl.js |ts >> /scripts/logs/jd_tcl.log 2>&1

#远程自定义shell脚本追加定时任务
10 2,15 * * * sleep 2;  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_mc.js |ts >> /scripts/logs/sj_jd_mc.js.log 2>&1
20 4,17 * * * sleep 114;  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_mc.js |ts >> /scripts/logs/sj_jd_mc.js.log 2>&1
30 6,19 * * * sleep 8;  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_mc.js |ts >> /scripts/logs/sj_jd_mc.js.log 2>&1
40 8,21 * * * sleep 94;  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_mc.js |ts >> /scripts/logs/sj_jd_mc.js.log 2>&1
50 10,23 * * * sleep 123;  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_mc.js |ts >> /scripts/logs/sj_jd_mc.js.log 2>&1
25 18-21/1 * 6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_zoo.js |ts >> /scripts/logs/sj_jd_zoo.js.log 2>&1
15 8,21 * 5,6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_new.js |ts >> /scripts/logs/sj_jd_new.js.log 2>&1
6 0,1,8,18,20 18-31 5 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_urge.js |ts >> /scripts/logs/sj_jd_urge.js.log 2>&1
17 0,7,18 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jddj_plantBeans.js |ts >> /scripts/logs/sj_jddj_plantBeans.js.log 2>&1
36 0,23 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_zjd.js |ts >> /scripts/logs/sj_jd_zjd.js.log 2>&1
9 0,12,23 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_mrcj.js |ts >> /scripts/logs/sj_jd_mrcj.js.log 2>&1
31 0 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_cj.js |ts >> /scripts/logs/sj_jd_cj.js.log 2>&1
0 0,13 * 4-7 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_mc.js |ts >> /scripts/logs/sj_jd_mc.js.log 2>&1
45 23 * * 6  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_unbind.js |ts >> /scripts/logs/sj_jd_unbind.js.log 2>&1
26 1,9 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_dpqd.js |ts >> /scripts/logs/sj_jd_dpqd.js.log 2>&1
1 0-22/5 * 5,6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_carnivalcity.js |ts >> /scripts/logs/sj_jd_carnivalcity.js.log 2>&1
3 7 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_shop_add_to_car.js |ts >> /scripts/logs/sj_jd_shop_add_to_car.js.log 2>&1
5 10-22/3 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_health_community.js |ts >> /scripts/logs/sj_jd_health_community.js.log 2>&1
15 0 7-31 5 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_haier.js |ts >> /scripts/logs/sj_jd_haier.js.log 2>&1
10 7,20 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_xmf.js |ts >> /scripts/logs/sj_jd_xmf.js.log 2>&1
30 0,9,21 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_superBrand.js |ts >> /scripts/logs/sj_jd_superBrand.js.log 2>&1
5 1,8,10,16 1-18 6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_xcppkh.js |ts >> /scripts/logs/sj_jd_xcppkh.js.log 2>&1
22 * * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jx_mccoin.js |ts >> /scripts/logs/sj_jx_mccoin.js.log 2>&1
2 0,9 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_didi.js |ts >> /scripts/logs/sj_didi.js.log 2>&1
27 8,20 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_shop_lottery.js |ts >> /scripts/logs/sj_jd_shop_lottery.js.log 2>&1
3 0,8,23 * * *   . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jddj_bean.js |ts >> /scripts/logs/sj_jddj_bean.js.log 2>&1
10 7 * 5,6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_flp.js |ts >> /scripts/logs/sj_jd_flp.js.log 2>&1
12 * * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jx_mc.js |ts >> /scripts/logs/sj_jx_mc.js.log 2>&1
16 6,16,20 1-18 6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_limitBox.js |ts >> /scripts/logs/sj_jd_limitBox.js.log 2>&1
5 10 * 3 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_mgold.js |ts >> /scripts/logs/sj_jd_mgold.js.log 2>&1
3 9 1 * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_shakeBean.js |ts >> /scripts/logs/sj_jd_shakeBean.js.log 2>&1
10-51/5 * * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jddj_fruit_collectWater.js |ts >> /scripts/logs/sj_jddj_fruit_collectWater.js.log 2>&1
5 8,14,20 19-25 5 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_mother_jump.js |ts >> /scripts/logs/sj_jd_mother_jump.js.log 2>&1
20 * * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_xxl_gh.js |ts >> /scripts/logs/sj_jd_xxl_gh.js.log 2>&1
15 8 9-13 5 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_etip.js |ts >> /scripts/logs/sj_jd_etip.js.log 2>&1
20 7 * 5,6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_oneplus.js |ts >> /scripts/logs/sj_jd_oneplus.js.log 2>&1
10 8,20 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_daydlt.js |ts >> /scripts/logs/sj_jd_daydlt.js.log 2>&1
3 9,20 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_marketLottery.js |ts >> /scripts/logs/sj_jd_marketLottery.js.log 2>&1
0 0 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_inter_shop_sign.js |ts >> /scripts/logs/sj_jd_inter_shop_sign.js.log 2>&1
13 8 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_fanslove.js |ts >> /scripts/logs/sj_jd_fanslove.js.log 2>&1
10,25 1 * * 2,5  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_captain.js |ts >> /scripts/logs/sj_jd_captain.js.log 2>&1
22 12,17,20 1-10 6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_starstore.js |ts >> /scripts/logs/sj_jd_starstore.js.log 2>&1
2 0,8,11,17 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jddj_fruit.js |ts >> /scripts/logs/sj_jddj_fruit.js.log 2>&1
15 1,5,9,15,18,20,21,22 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_pk.js |ts >> /scripts/logs/sj_jd_pk.js.log 2>&1
30 0-23/1 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_redrainhalf.js |ts >> /scripts/logs/sj_jd_redrainhalf.js.log 2>&1
36 1,17 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_dpqd2.js |ts >> /scripts/logs/sj_jd_dpqd2.js.log 2>&1
11 0,1,19 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_twlx.js |ts >> /scripts/logs/sj_jd_twlx.js.log 2>&1
0 3,9 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_paopao.js |ts >> /scripts/logs/sj_jd_paopao.js.log 2>&1
1 0-23/1 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_redrainme.js |ts >> /scripts/logs/sj_jd_redrainme.js.log 2>&1
13 0,8 20-31 5 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_rtm.js |ts >> /scripts/logs/sj_jd_rtm.js.log 2>&1
3 1,20 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_shake.js |ts >> /scripts/logs/sj_jd_shake.js.log 2>&1
10 0,8 21-27 5 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_mi.js |ts >> /scripts/logs/sj_jd_mi.js.log 2>&1
2 0,21 8-9 5 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_wish.js |ts >> /scripts/logs/sj_jd_wish.js.log 2>&1
0 0-23/1 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_redrainlzz.js |ts >> /scripts/logs/sj_jd_redrainlzz.js.log 2>&1
8-55/9 * * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jddj_getPoints.js |ts >> /scripts/logs/sj_jddj_getPoints.js.log 2>&1
15 1,7,18 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_jbczy.js |ts >> /scripts/logs/sj_jd_jbczy.js.log 2>&1
0,1 20 1-18 6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_hby.js |ts >> /scripts/logs/sj_jd_hby.js.log 2>&1
1 0,8,13,20 6-11 5 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_oppo.js |ts >> /scripts/logs/sj_jd_oppo.js.log 2>&1
10 20 * 5,6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_jxhb.js |ts >> /scripts/logs/sj_jd_jxhb.js.log 2>&1
3 10 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jx_products_detail.js |ts >> /scripts/logs/sj_jx_products_detail.js.log 2>&1
42 19,21,22 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_618jc.js |ts >> /scripts/logs/sj_jd_618jc.js.log 2>&1
32 0-23/1 * 6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_618redpacket.js |ts >> /scripts/logs/sj_jd_618redpacket.js.log 2>&1
23 7,19 * 5,6 *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_superbox.js |ts >> /scripts/logs/sj_jd_superbox.js.log 2>&1
2 8,21 * * *  . /scripts/docker/auto_help.sh export > /scripts/logs/auto_help_export.log && spnode  /scripts/sj_jd_trysuccess.js |ts >> /scripts/logs/sj_jd_trysuccess.js.log 2>&1

# 必须要的默认定时任务请勿删除
58 5 * * * docker_entrypoint.sh |ts >> /scripts/logs/default_task.log 2>&1
