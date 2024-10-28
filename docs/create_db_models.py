# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

Base = declarative_base()

class Kingdom(Base):
    """description: Represents a kingdom in the medieval realm."""
    __tablename__ = 'kingdoms'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    ruler_id = Column(Integer, ForeignKey('kings.id'), nullable=True)

class King(Base):
    """description: Represents a king who rules over a kingdom."""
    __tablename__ = 'kings'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    reign_start_date = Column(String, nullable=True)

class Queen(Base):
    """description: Represents a queen associated with a king."""
    __tablename__ = 'queens'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    king_id = Column(Integer, ForeignKey('kings.id'), nullable=False)

class Castle(Base):
    """description: Represents a castle within a kingdom."""
    __tablename__ = 'castles'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    kingdom_id = Column(Integer, ForeignKey('kingdoms.id'), nullable=True)

class Knight(Base):
    """description: Represents a knight serving a kingdom."""
    __tablename__ = 'knights'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    title = Column(String, nullable=True)
    kingdom_id = Column(Integer, ForeignKey('kingdoms.id'), nullable=True)

class Peasant(Base):
    """description: Represents a common person living in a kingdom."""
    __tablename__ = 'peasants'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    occupation = Column(String, nullable=True)
    kingdom_id = Column(Integer, ForeignKey('kingdoms.id'), nullable=True)

class Resource(Base):
    """description: Represents a natural or economic resource available in a kingdom."""
    __tablename__ = 'resources'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    quantity = Column(Float, nullable=True)
    kingdom_id = Column(Integer, ForeignKey('kingdoms.id'), nullable=True)

class Battle(Base):
    """description: Represents a battle event involving knights and kingdoms."""
    __tablename__ = 'battles'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    date = Column(String, nullable=True)
    location = Column(String, nullable=False)

class KnightBattleParticipation(Base):
    """description: Link table associating knights with battles they participated in."""
    __tablename__ = 'knight_battle_participations'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    knight_id = Column(Integer, ForeignKey('knights.id'), nullable=False)
    battle_id = Column(Integer, ForeignKey('battles.id'), nullable=False)

class Village(Base):
    """description: Represents a village within a kingdom."""
    __tablename__ = 'villages'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    population = Column(Integer, nullable=True)
    kingdom_id = Column(Integer, ForeignKey('kingdoms.id'), nullable=True)

class Trade(Base):
    """description: Represents trade agreements or activities between kingdoms."""
    __tablename__ = 'trades'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    kingdom_a_id = Column(Integer, ForeignKey('kingdoms.id'), nullable=False)
    kingdom_b_id = Column(Integer, ForeignKey('kingdoms.id'), nullable=False)
    goods = Column(String, nullable=False)

class Advisor(Base):
    """description: Represents an advisor to a king."""
    __tablename__ = 'advisors'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    expertise = Column(String, nullable=True)
    king_id = Column(Integer, ForeignKey('kings.id'), nullable=False)

# Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
kingdom1 = Kingdom(name='Northrealm')
kingdom2 = Kingdom(name='Southrealm')

king1 = King(name='King Arthur', reign_start_date=str(datetime(1066, 1, 1)))
king2 = King(name='King Richard', reign_start_date=str(datetime(1087, 1, 1)))

session.add_all([kingdom1, kingdom2, king1, king2])

queen1 = Queen(name='Queen Guinevere', king_id=1)
queen2 = Queen(name='Queen Isabella', king_id=2)

session.add_all([queen1, queen2])

castle1 = Castle(name='Camelot', kingdom_id=1)
castle2 = Castle(name='Highgard', kingdom_id=2)

session.add_all([castle1, castle2])

knight1 = Knight(name='Sir Lancelot', title='Champion', kingdom_id=1)
knight2 = Knight(name='Sir Galahad', title='Grail Knight', kingdom_id=1)

session.add_all([knight1, knight2])

peasant1 = Peasant(name='John the Smith', occupation='Blacksmith', kingdom_id=1)
peasant2 = Peasant(name='Mabel the Weaver', occupation='Weaver', kingdom_id=2)

session.add_all([peasant1, peasant2])

resource1 = Resource(name='Gold', quantity=1024.5, kingdom_id=1)
resource2 = Resource(name='Grain', quantity=500.0, kingdom_id=2)

session.add_all([resource1, resource2])

battle1 = Battle(name='Battle of Camelot', date=str(datetime(1070, 7, 15)), location='Camelot Plains')
battle2 = Battle(name='Siege of Highgard', date=str(datetime(1090, 8, 22)), location='Highgard Walls')

session.add_all([battle1, battle2])

knight_battle1 = KnightBattleParticipation(knight_id=1, battle_id=1)
knight_battle2 = KnightBattleParticipation(knight_id=2, battle_id=2)

session.add_all([knight_battle1, knight_battle2])

village1 = Village(name='Woodshire', population=150, kingdom_id=1)
village2 = Village(name='Stoneybrook', population=200, kingdom_id=2)

session.add_all([village1, village2])

trade1 = Trade(kingdom_a_id=1, kingdom_b_id=2, goods='Grain - Armor')

session.add(trade1)

advisor1 = Advisor(name='Merlin', expertise='Magic and Strategy', king_id=1)
advisor2 = Advisor(name='Aldous the Wise', expertise='Economics', king_id=2)

session.add_all([advisor1, advisor2])

# Commit the session
session.commit()

session.close()
