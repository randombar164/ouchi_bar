class AddIsDisplayBeforeAmountToV3Unit < ActiveRecord::Migration[6.1]
  def change
    add_column :v3_units, :is_display_before_amount, :boolean, null: false, default: false
  end
end
