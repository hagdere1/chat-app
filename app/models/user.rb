class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_and_belongs_to_many :channels
  has_many :messages, dependent: :destroy
  has_many :message_saves, dependent: :destroy
  has_many :saved_messages, through: :message_saves, source: :message

  def generate_auth_token
    auth_token = SecureRandom.hex
    self.update_attributes(auth_token: auth_token)
    auth_token
  end

  def reset_auth_token
    self.update_attributes(auth_token: nil)
  end
end
