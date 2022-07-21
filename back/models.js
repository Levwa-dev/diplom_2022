import Sequelize from "sequelize";
import bcrypt from 'bcrypt'

export const sequelize = new Sequelize('diplom_22_base', 'root', 'root', {
    dialect: "mysql",
    host: 'localhost',
    port: '3306',
    define: {
        timestamps: false
    }
})
export const Admin = sequelize.define('admin',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg:"Повина бути коректна адреса"
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    set(value){
      const reg = /[a-zA-Z0-9]/
      const ok = reg.exec(value)
      if(ok){
        if (value.length >=6 && value.length <= 20){
          const hash = bcrypt.hashSync(value, 10)
          this.setDataValue('password', hash)
        }
        else {
          throw new Error ('Ваш пароль повинен бути від 6 до 20 символів')
        }
      }
      else {
        throw new Error ("Пароль повинен бути латинськими буквами з додаванням цифр(або без них)")
      }
    }
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW(),
    get: ()=>{
      return this.getDataValue('date').toLocaleString('ua-ua',{timeZone: 'UTC'})
    }
  }
});

export const Photos = sequelize.define('slide',{
  id: {
    type: Sequelize.INTEGER,
    allowNull:false,
    autoIncrement:true,
    unique:true,
    primaryKey:true
  },
  photo: {
    type: Sequelize.BLOB('long')
  }
});

export const Offer = sequelize.define('offer',{
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull:false,
  },
  square: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  area: {
    type: Sequelize.STRING,
    allowNull:false
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  building: {
    type: Sequelize.STRING,
    allowNull:false
  },
  wall: {
    type: Sequelize.STRING,
    allowNull:null,
  },
  rooms: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  floor: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  superficiality: {
    type: Sequelize.INTEGER,
    allowNull:false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull:false
  },
  detail: {
    type: Sequelize.TEXT,
    allowNull:true
  },
  photo: {
    type: Sequelize.BLOB('long')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW(),
    get: ()=>{
      return this.getDataValue('date').toLocaleString('ua-ua',{timeZone: 'UTC'})
    }
  }
});
Offer.hasMany(Photos, {onDelete:'cascade'})

export const Realtor = sequelize.define('realtor',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    set(){
      this.setDataValue('name' `${firstName} ${lastName}`)
    }
  },
  email:{
    type: Sequelize.STRING,
    allowNull:false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Повина бути коректна адреса'
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    set(value){
      const reg = /[a-zA-Z0-9]/
      const ok = reg.exec(value)
      if(ok){
        if (value.length >=6 && value.length <= 20){
          const hash = bcrypt.hashSync(value, 10)
          this.setDataValue('password', hash)
        }
        else {
          throw new Error ('Ваш пароль повинен бути від 6 до 20 символів')
        }
      }
      else {
        throw new Error ("Пароль повинен бути латинськими буквами з додаванням цифр(або без них)")
      }
    }
  },
  city: {
    type: Sequelize.STRING,
    allowNull:false
  },
  description:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0
  },
  photo:{
    type: Sequelize.BLOB('long')
  },
  number:{
    type: Sequelize.INTEGER,
    allowNull:false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW(),
    get: ()=>{
      return this.getDataValue('date').toLocaleString('ua-ua',{timeZone: 'UTC'})
    }
  }
});
Realtor.hasMany(Offer, {onDelete: 'cascade'})

export const Agency = sequelize.define('agency',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    set(value){
      const reg = /[a-zA-Z0-9]/
      const ok = reg.exec(value)
      if(ok){
        if (value.length >=6 && value.length <= 20){
          const hash = bcrypt.hashSync(value, 10)
          this.setDataValue('password', hash)
        }
        else {
          throw new Error ('Ваш пароль повинен бути від 6 до 20 символів')
        }
      }
      else {
        throw new Error ("Пароль повинен бути латинськими буквами з додаванням цифр(або без них)")
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg:"Повина бути коректна адреса"
      }
    }
  },
  city: {
    type: Sequelize.STRING,
    allowNull:false
  },
  street: {
    type: Sequelize.STRING,
    allowNull:false
  },
  building: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  workingFrom: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  number: {
    type: Sequelize.STRING
  },
  logo: {
    type: Sequelize.BLOB('long')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW(),
    get: ()=>{
      return this.getDataValue('date').toLocaleString('ua-ua',{timeZone: 'UTC'})
    }
  }
});
Agency.hasMany(Realtor, {onDelete:'cascade'})