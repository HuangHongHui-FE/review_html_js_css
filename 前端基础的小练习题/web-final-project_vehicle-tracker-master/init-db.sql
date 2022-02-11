# Your database initialisation SQL here

# 用户信息表
DROP TABLE IF EXISTS pro_users;

CREATE TABLE IF NOT EXISTS pro_users (
  username VARCHAR(64) NOT NULL,
  password VARCHAR(64) NOT NULL,
  rel_name VARCHAR(64) NOT NULL,  # 用户真实名称
  born_date TEXT,   # 用户出生日期
  class_name VARCHAR(64) NOT NULL,  # 所属部门名称
  PRIMARY KEY (username)
);


# 车辆信息表
DROP TABLE IF EXISTS pro_cars;

CREATE TABLE IF NOT EXISTS pro_cars (
  register_number VARCHAR(6) NOT NULL,  # 6个字符的字母数字注册号
  maker VARCHAR(64) NOT NULL,  # 制造商名字
  model VARCHAR(64) NOT NULL,  # 型号名字
  year INT,  # 车型年
  start_value INT,  # 起始里程值
  color TEXT,  # 车辆颜色
  nums INT,   # 车辆拥有座椅数量
  picture_path VARCHAR(64) NOT NULL,  #车辆的照片
  PRIMARY KEY (register_number)
);


# 车辆与用户可以预约的关系
DROP TABLE IF EXISTS pro_users_cars;

CREATE TABLE IF NOT EXISTS pro_users_cars (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(64) NOT NULL,
    register_number VARCHAR(6) NOT NULL,  # 6个字符的字母数字注册号
    PRIMARY KEY (id)
);




# 车辆预定添加用户自己的记录
DROP TABLE IF EXISTS pro_reserve_record;

CREATE TABLE IF NOT EXISTS pro_reserve_record (
    id INT NOT NULL AUTO_INCREMENT,
    start_time INT,  # 行程开始时间
    end_time INT,  # 行程结束时间
    register_number VARCHAR(6) NOT NULL,  # 6个字符的字母数字注册号
    distance VARCHAR(64) NOT NULL,  # 行程距离
    username VARCHAR(64) NOT NULL,
    money INT,  # 费用
    PRIMARY KEY (id)
);





