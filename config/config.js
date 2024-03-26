import mongoose from 'mongoose'

export const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT_URL)
    console.log(
      'Database connect',
      connect.connection.host,
      connect.connection.name
    )
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

