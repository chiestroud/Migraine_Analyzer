USE [master]
GO
/****** Object:  Database [MigraineAnalyzer]    Script Date: 12/6/2021 9:48:16 PM ******/
CREATE DATABASE [MigraineAnalyzer]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MigraineAnalyzer', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MigraineAnalyzer.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MigraineAnalyzer_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\MigraineAnalyzer_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [MigraineAnalyzer] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MigraineAnalyzer].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MigraineAnalyzer] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET ARITHABORT OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MigraineAnalyzer] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MigraineAnalyzer] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET  ENABLE_BROKER 
GO
ALTER DATABASE [MigraineAnalyzer] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MigraineAnalyzer] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET RECOVERY FULL 
GO
ALTER DATABASE [MigraineAnalyzer] SET  MULTI_USER 
GO
ALTER DATABASE [MigraineAnalyzer] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MigraineAnalyzer] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MigraineAnalyzer] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MigraineAnalyzer] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MigraineAnalyzer] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'MigraineAnalyzer', N'ON'
GO
ALTER DATABASE [MigraineAnalyzer] SET QUERY_STORE = OFF
GO
USE [MigraineAnalyzer]
GO
/****** Object:  Table [dbo].[Day]    Script Date: 12/6/2021 9:48:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Day](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[day] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Duration]    Script Date: 12/6/2021 9:48:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Duration](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[duration] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Migraines]    Script Date: 12/6/2021 9:48:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Migraines](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
	[logDate] [datetime] NOT NULL,
	[dayId] [int] NOT NULL,
	[monthId] [int] NOT NULL,
	[currentYear] [int] NOT NULL,
	[timeId] [int] NOT NULL,
	[intensity] [varchar](100) NULL,
	[durationId] [int] NOT NULL,
	[vomit] [bit] NOT NULL,
	[weather] [varchar](100) NULL,
	[emotion] [varchar](100) NULL,
	[temperatureId] [int] NULL,
	[comment] [nvarchar](max) NULL,
	[foodId] [int] NOT NULL,
	[drinkId] [int] NOT NULL,
	[medicineId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Month]    Script Date: 12/6/2021 9:48:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Month](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[month] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Temperature]    Script Date: 12/6/2021 9:48:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Temperature](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[temp] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TimeOfTheDay]    Script Date: 12/6/2021 9:48:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TimeOfTheDay](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[time] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Drinks]    Script Date: 12/6/2021 9:48:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Drinks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
	[drinkName] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Food]    Script Date: 12/6/2021 9:48:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Food](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
	[dishName] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Medicines]    Script Date: 12/6/2021 9:48:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Medicines](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
	[medicineName] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 12/6/2021 9:48:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[imageUrl] [varchar](100) NULL,
	[dateCreated] [datetime] NOT NULL,
	[username] [varchar](100) NULL,
	[firstName] [varchar](100) NULL,
	[lastName] [varchar](100) NULL,
	[email] [varchar](100) NULL,
	[birthYear] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Day] ON 

INSERT [dbo].[Day] ([id], [day]) VALUES (1, 1)
INSERT [dbo].[Day] ([id], [day]) VALUES (2, 2)
INSERT [dbo].[Day] ([id], [day]) VALUES (3, 3)
INSERT [dbo].[Day] ([id], [day]) VALUES (4, 4)
INSERT [dbo].[Day] ([id], [day]) VALUES (5, 5)
INSERT [dbo].[Day] ([id], [day]) VALUES (6, 6)
INSERT [dbo].[Day] ([id], [day]) VALUES (7, 7)
INSERT [dbo].[Day] ([id], [day]) VALUES (8, 8)
INSERT [dbo].[Day] ([id], [day]) VALUES (9, 9)
INSERT [dbo].[Day] ([id], [day]) VALUES (10, 10)
INSERT [dbo].[Day] ([id], [day]) VALUES (11, 11)
INSERT [dbo].[Day] ([id], [day]) VALUES (12, 12)
INSERT [dbo].[Day] ([id], [day]) VALUES (13, 13)
INSERT [dbo].[Day] ([id], [day]) VALUES (14, 14)
INSERT [dbo].[Day] ([id], [day]) VALUES (15, 15)
INSERT [dbo].[Day] ([id], [day]) VALUES (16, 16)
INSERT [dbo].[Day] ([id], [day]) VALUES (17, 17)
INSERT [dbo].[Day] ([id], [day]) VALUES (18, 18)
INSERT [dbo].[Day] ([id], [day]) VALUES (19, 19)
INSERT [dbo].[Day] ([id], [day]) VALUES (20, 20)
INSERT [dbo].[Day] ([id], [day]) VALUES (21, 21)
INSERT [dbo].[Day] ([id], [day]) VALUES (22, 22)
INSERT [dbo].[Day] ([id], [day]) VALUES (23, 23)
INSERT [dbo].[Day] ([id], [day]) VALUES (24, 24)
INSERT [dbo].[Day] ([id], [day]) VALUES (25, 25)
INSERT [dbo].[Day] ([id], [day]) VALUES (26, 26)
INSERT [dbo].[Day] ([id], [day]) VALUES (27, 27)
INSERT [dbo].[Day] ([id], [day]) VALUES (28, 28)
INSERT [dbo].[Day] ([id], [day]) VALUES (29, 29)
INSERT [dbo].[Day] ([id], [day]) VALUES (30, 30)
INSERT [dbo].[Day] ([id], [day]) VALUES (31, 31)
SET IDENTITY_INSERT [dbo].[Day] OFF
SET IDENTITY_INSERT [dbo].[Duration] ON 

INSERT [dbo].[Duration] ([id], [duration]) VALUES (1, N'< 4 hours')
INSERT [dbo].[Duration] ([id], [duration]) VALUES (2, N'4 < 10 hours')
INSERT [dbo].[Duration] ([id], [duration]) VALUES (3, N'10 < 16 hours')
INSERT [dbo].[Duration] ([id], [duration]) VALUES (4, N'16 < 20 hours')
INSERT [dbo].[Duration] ([id], [duration]) VALUES (5, N'20 < 24 hours')
INSERT [dbo].[Duration] ([id], [duration]) VALUES (6, N'More than 1 day')
INSERT [dbo].[Duration] ([id], [duration]) VALUES (7, N'1 day < 2 days')
INSERT [dbo].[Duration] ([id], [duration]) VALUES (8, N'2 days < 3 days')
INSERT [dbo].[Duration] ([id], [duration]) VALUES (9, N'More than 3 days')
INSERT [dbo].[Duration] ([id], [duration]) VALUES (10, N'')
INSERT [dbo].[Duration] ([id], [duration]) VALUES (11, N'')
SET IDENTITY_INSERT [dbo].[Duration] OFF
SET IDENTITY_INSERT [dbo].[Month] ON 

INSERT [dbo].[Month] ([id], [month]) VALUES (1, N'January')
INSERT [dbo].[Month] ([id], [month]) VALUES (2, N'February')
INSERT [dbo].[Month] ([id], [month]) VALUES (3, N'March')
INSERT [dbo].[Month] ([id], [month]) VALUES (4, N'April')
INSERT [dbo].[Month] ([id], [month]) VALUES (5, N'May')
INSERT [dbo].[Month] ([id], [month]) VALUES (6, N'June')
INSERT [dbo].[Month] ([id], [month]) VALUES (7, N'July')
INSERT [dbo].[Month] ([id], [month]) VALUES (8, N'August')
INSERT [dbo].[Month] ([id], [month]) VALUES (9, N'September')
INSERT [dbo].[Month] ([id], [month]) VALUES (10, N'October')
INSERT [dbo].[Month] ([id], [month]) VALUES (11, N'November')
INSERT [dbo].[Month] ([id], [month]) VALUES (12, N'December')
SET IDENTITY_INSERT [dbo].[Month] OFF
SET IDENTITY_INSERT [dbo].[TimeOfTheDay] ON 

INSERT [dbo].[TimeOfTheDay] ([id], [time]) VALUES (1, N'0am ~ 3am')
INSERT [dbo].[TimeOfTheDay] ([id], [time]) VALUES (2, N'3am ~ 6am')
INSERT [dbo].[TimeOfTheDay] ([id], [time]) VALUES (3, N'6am ~ 9am')
INSERT [dbo].[TimeOfTheDay] ([id], [time]) VALUES (4, N'9am ~ 12pm')
INSERT [dbo].[TimeOfTheDay] ([id], [time]) VALUES (5, N'12pm ~ 3pm')
INSERT [dbo].[TimeOfTheDay] ([id], [time]) VALUES (6, N'3pm ~ 6pm')
INSERT [dbo].[TimeOfTheDay] ([id], [time]) VALUES (7, N'6pm ~ 9pm')
INSERT [dbo].[TimeOfTheDay] ([id], [time]) VALUES (8, N'9pm ~ 0am')
SET IDENTITY_INSERT [dbo].[TimeOfTheDay] OFF
SET IDENTITY_INSERT [dbo].[User_Drinks] ON 

INSERT [dbo].[User_Drinks] ([id], [userId], [drinkName]) VALUES (2, 1, N'Vodka')
INSERT [dbo].[User_Drinks] ([id], [userId], [drinkName]) VALUES (3, 1, N'Water')
SET IDENTITY_INSERT [dbo].[User_Drinks] OFF
SET IDENTITY_INSERT [dbo].[User_Food] ON 

INSERT [dbo].[User_Food] ([id], [userId], [dishName]) VALUES (1, 1, N'Gyoza')
SET IDENTITY_INSERT [dbo].[User_Food] OFF
SET IDENTITY_INSERT [dbo].[User_Medicines] ON 

INSERT [dbo].[User_Medicines] ([id], [userId], [medicineName]) VALUES (1, 1, N'Advil')
SET IDENTITY_INSERT [dbo].[User_Medicines] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [imageUrl], [dateCreated], [username], [firstName], [lastName], [email], [birthYear]) VALUES (1, N'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg', CAST(N'2021-12-07T01:52:49.733' AS DateTime), N'chiechie', N'Chie', N'Stroud', N'cstroud@cstroud.com', 1987)
SET IDENTITY_INSERT [dbo].[Users] OFF
ALTER TABLE [dbo].[Migraines] ADD  DEFAULT (getutcdate()) FOR [logDate]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT (getutcdate()) FOR [dateCreated]
GO
ALTER TABLE [dbo].[Migraines]  WITH CHECK ADD FOREIGN KEY([dayId])
REFERENCES [dbo].[Day] ([id])
GO
ALTER TABLE [dbo].[Migraines]  WITH CHECK ADD FOREIGN KEY([drinkId])
REFERENCES [dbo].[User_Drinks] ([id])
GO
ALTER TABLE [dbo].[Migraines]  WITH CHECK ADD FOREIGN KEY([durationId])
REFERENCES [dbo].[Duration] ([id])
GO
ALTER TABLE [dbo].[Migraines]  WITH CHECK ADD FOREIGN KEY([foodId])
REFERENCES [dbo].[User_Food] ([id])
GO
ALTER TABLE [dbo].[Migraines]  WITH CHECK ADD FOREIGN KEY([medicineId])
REFERENCES [dbo].[User_Medicines] ([id])
GO
ALTER TABLE [dbo].[Migraines]  WITH CHECK ADD FOREIGN KEY([monthId])
REFERENCES [dbo].[Month] ([id])
GO
ALTER TABLE [dbo].[Migraines]  WITH CHECK ADD FOREIGN KEY([temperatureId])
REFERENCES [dbo].[Temperature] ([id])
GO
ALTER TABLE [dbo].[Migraines]  WITH CHECK ADD FOREIGN KEY([timeId])
REFERENCES [dbo].[TimeOfTheDay] ([id])
GO
ALTER TABLE [dbo].[Migraines]  WITH CHECK ADD FOREIGN KEY([userId])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[User_Drinks]  WITH CHECK ADD FOREIGN KEY([userId])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[User_Food]  WITH CHECK ADD FOREIGN KEY([userId])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[User_Medicines]  WITH CHECK ADD FOREIGN KEY([userId])
REFERENCES [dbo].[Users] ([id])
GO
USE [master]
GO
ALTER DATABASE [MigraineAnalyzer] SET  READ_WRITE 
GO
