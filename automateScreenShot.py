from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Configuration for headless operation of Chrome
options = webdriver.ChromeOptions()
options.add_argument("--headless")

# Set up WebDriver
driver = webdriver.Chrome(options=options)

driver.maximize_window()
driver.get("https://torontomu.primo.exlibrisgroup.com/discovery/search?query=any,contains,Meta%20Physics&tab=OCULDiscoveryNetwork&search_scope=OCULDiscoveryNetwork&vid=01OCUL_TMU:01OCUL_TMU&lang=en&offset=0")

# Wait for the search results to load
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "item-title"))
)

# Extracting the width and height of window
width = 1920
height = driver.execute_script("return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)")
driver.set_window_size(width, height)

page_body = driver.find_element(By.TAG_NAME, "body")
page_body.screenshot("screenshot.png")

# End session
driver.quit()