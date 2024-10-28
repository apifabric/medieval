# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 28, 2024 18:48:50
# Database: sqlite:////tmp/tmp.tUGJ9z7KSB/medieval/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Battle(SAFRSBaseX, Base):
    """
    description: Represents a battle event involving knights and kingdoms.
    """
    __tablename__ = 'battles'
    _s_collection_name = 'Battle'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    date = Column(String)
    location = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    KnightBattleParticipationList : Mapped[List["KnightBattleParticipation"]] = relationship(back_populates="battle")



class King(SAFRSBaseX, Base):
    """
    description: Represents a king who rules over a kingdom.
    """
    __tablename__ = 'kings'
    _s_collection_name = 'King'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    reign_start_date = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    AdvisorList : Mapped[List["Advisor"]] = relationship(back_populates="king")
    KingdomList : Mapped[List["Kingdom"]] = relationship(back_populates="ruler")
    QueenList : Mapped[List["Queen"]] = relationship(back_populates="king")



class Advisor(SAFRSBaseX, Base):
    """
    description: Represents an advisor to a king.
    """
    __tablename__ = 'advisors'
    _s_collection_name = 'Advisor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    expertise = Column(String)
    king_id = Column(ForeignKey('kings.id'), nullable=False)

    # parent relationships (access parent)
    king : Mapped["King"] = relationship(back_populates=("AdvisorList"))

    # child relationships (access children)



class Kingdom(SAFRSBaseX, Base):
    """
    description: Represents a kingdom in the medieval realm.
    """
    __tablename__ = 'kingdoms'
    _s_collection_name = 'Kingdom'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    ruler_id = Column(ForeignKey('kings.id'))

    # parent relationships (access parent)
    ruler : Mapped["King"] = relationship(back_populates=("KingdomList"))

    # child relationships (access children)
    CastleList : Mapped[List["Castle"]] = relationship(back_populates="kingdom")
    KnightList : Mapped[List["Knight"]] = relationship(back_populates="kingdom")
    PeasantList : Mapped[List["Peasant"]] = relationship(back_populates="kingdom")
    ResourceList : Mapped[List["Resource"]] = relationship(back_populates="kingdom")
    TradeList : Mapped[List["Trade"]] = relationship(foreign_keys='[Trade.kingdom_a_id]', back_populates="kingdom_a")
    kingdom_bTradeList : Mapped[List["Trade"]] = relationship(foreign_keys='[Trade.kingdom_b_id]', back_populates="kingdom_b")
    VillageList : Mapped[List["Village"]] = relationship(back_populates="kingdom")



class Queen(SAFRSBaseX, Base):
    """
    description: Represents a queen associated with a king.
    """
    __tablename__ = 'queens'
    _s_collection_name = 'Queen'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    king_id = Column(ForeignKey('kings.id'), nullable=False)

    # parent relationships (access parent)
    king : Mapped["King"] = relationship(back_populates=("QueenList"))

    # child relationships (access children)



class Castle(SAFRSBaseX, Base):
    """
    description: Represents a castle within a kingdom.
    """
    __tablename__ = 'castles'
    _s_collection_name = 'Castle'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    kingdom_id = Column(ForeignKey('kingdoms.id'))

    # parent relationships (access parent)
    kingdom : Mapped["Kingdom"] = relationship(back_populates=("CastleList"))

    # child relationships (access children)



class Knight(SAFRSBaseX, Base):
    """
    description: Represents a knight serving a kingdom.
    """
    __tablename__ = 'knights'
    _s_collection_name = 'Knight'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    title = Column(String)
    kingdom_id = Column(ForeignKey('kingdoms.id'))

    # parent relationships (access parent)
    kingdom : Mapped["Kingdom"] = relationship(back_populates=("KnightList"))

    # child relationships (access children)
    KnightBattleParticipationList : Mapped[List["KnightBattleParticipation"]] = relationship(back_populates="knight")



class Peasant(SAFRSBaseX, Base):
    """
    description: Represents a common person living in a kingdom.
    """
    __tablename__ = 'peasants'
    _s_collection_name = 'Peasant'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    occupation = Column(String)
    kingdom_id = Column(ForeignKey('kingdoms.id'))

    # parent relationships (access parent)
    kingdom : Mapped["Kingdom"] = relationship(back_populates=("PeasantList"))

    # child relationships (access children)



class Resource(SAFRSBaseX, Base):
    """
    description: Represents a natural or economic resource available in a kingdom.
    """
    __tablename__ = 'resources'
    _s_collection_name = 'Resource'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    quantity = Column(Float)
    kingdom_id = Column(ForeignKey('kingdoms.id'))

    # parent relationships (access parent)
    kingdom : Mapped["Kingdom"] = relationship(back_populates=("ResourceList"))

    # child relationships (access children)



class Trade(SAFRSBaseX, Base):
    """
    description: Represents trade agreements or activities between kingdoms.
    """
    __tablename__ = 'trades'
    _s_collection_name = 'Trade'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    kingdom_a_id = Column(ForeignKey('kingdoms.id'), nullable=False)
    kingdom_b_id = Column(ForeignKey('kingdoms.id'), nullable=False)
    goods = Column(String, nullable=False)

    # parent relationships (access parent)
    kingdom_a : Mapped["Kingdom"] = relationship(foreign_keys='[Trade.kingdom_a_id]', back_populates=("TradeList"))
    kingdom_b : Mapped["Kingdom"] = relationship(foreign_keys='[Trade.kingdom_b_id]', back_populates=("kingdom_bTradeList"))

    # child relationships (access children)



class Village(SAFRSBaseX, Base):
    """
    description: Represents a village within a kingdom.
    """
    __tablename__ = 'villages'
    _s_collection_name = 'Village'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    population = Column(Integer)
    kingdom_id = Column(ForeignKey('kingdoms.id'))

    # parent relationships (access parent)
    kingdom : Mapped["Kingdom"] = relationship(back_populates=("VillageList"))

    # child relationships (access children)



class KnightBattleParticipation(SAFRSBaseX, Base):
    """
    description: Link table associating knights with battles they participated in.
    """
    __tablename__ = 'knight_battle_participations'
    _s_collection_name = 'KnightBattleParticipation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    knight_id = Column(ForeignKey('knights.id'), nullable=False)
    battle_id = Column(ForeignKey('battles.id'), nullable=False)

    # parent relationships (access parent)
    battle : Mapped["Battle"] = relationship(back_populates=("KnightBattleParticipationList"))
    knight : Mapped["Knight"] = relationship(back_populates=("KnightBattleParticipationList"))

    # child relationships (access children)
