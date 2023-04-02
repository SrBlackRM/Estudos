from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep

driver = webdriver.Chrome()

username = 'teste'
password = 'teste'
url_game_auth = 'https://blaze.com/pt/games/double'

# XPATHS
login_button_xpath = '//*[@id="header"]/div/div[2]/div/div/div[1]/a'
login_email_input_name = 'username'
login_password_input_name = 'password'
login_enter_button_xpath = '/html/body/div[1]/main/div[3]/div/div[2]/div/form/div[4]/button'

driver.get(url_game_auth)

sleep(2)

# Encontra botão de fazer login e clica
login_button_element = driver.find_element(By.XPATH, login_button_xpath)
login_button_element.click()

sleep(3)
# Após clicar, encontra e insere os dados de login, tanto para o email quanto para senha
login_email_input_element = driver.find_element(By.NAME, login_email_input_name)
login_email_input_element.send_keys(username)

sleep(3)
login_password_input_element = driver.find_element(By.NAME, login_password_input_name)
login_password_input_element.send_keys(password)

sleep(2)
# Aperta o botão de enviar
login_enter_button_element = driver.find_element(By.XPATH, login_enter_button_xpath)
login_enter_button_element.click()

sleep(2)
driver.quit()
