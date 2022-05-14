class AddIsDisplayBeforeAmountToUnit < ActiveRecord::Migration[6.1]
  def change
    add_column :units, :is_display_before_amount, :boolean, null: false, default: false
  end
end
